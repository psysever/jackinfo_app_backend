
import { uploadToS3 } from './../../shared/shared.utils'
import { processHashtags } from './../photos.uils'
import { protectResolver } from '../../users/users.utils'
import client from '../../client'

export default {
  Mutation: {
    uploadPhotoCss: protectResolver(
      async (
        _: any,
        { file, caption, skils, subject, photoId}: any,
        { loggedInUser }: any,
      ) => {
        const ok = await client.photo.findUnique({
          where:{
            id: photoId
          },
          select:{
            id:true
          }
        })
        if(!ok){
          return{
            ok: false,
          error:"NoUploadCSS"}
        }
        let hashtagObj: any = []
        if (caption) {
          hashtagObj = processHashtags(caption)
        }
        const fileUrl = await uploadToS3(
          file,
          loggedInUser.id,
          'uploadsphotoCss',
        )
         client.photoCss.create({
          data: {
            file: fileUrl,
            caption,
            skils,
            subject,
            user: {
              connect: {
                id: loggedInUser.id,
              },
            
            ...(hashtagObj?.length > 0 && {
              hashtags: {
                connectOrCreate: hashtagObj,
              },
            }),
          },
        })
      },
    ),
  },
}
