import { uploadToS3 } from './../../shared/shared.utils'
import { Resolvers } from '../../types'
import { protectResolver } from '../../users/users.utils'
import { processHashtags } from '../photos.uils'
import client from './../../client'
// import { processHashtags } from './../photos.uils'

export default {
  Mutation: {
    editPhoto: protectResolver(
      async (
        _: any,
        {
          id,
          file,
          file2,
          file3,
          file4,
          file5,
          file6,
          file7,
          file8,
          caption,
          skils,
          subject,
          subject2,
          subject3,
          subject4,
          subject5,
          subject6,
          subject7,
          subject8,
        }: any,
        { loggedInUser }: any,
      ) => {
        console.log(id)
        const oldPhoto = await client.photo.findFirst({
          where: {
            id,
            userId: loggedInUser.id,
          },
          // include: {
          //   hashtags: {
          //     select: {
          //       hashtag: true,
          //     },
          //   },
          // },
        })
        if (!oldPhoto) {
          return {
            ok: false,
            error: 'NoPhoto',
          }
        }
        let hashtagObj = []
        if (caption) {
          hashtagObj = processHashtags(caption)
        }

        let fileUrl = null
        let fileUrl2 = null
        let fileUrl3 = null
        let fileUrl4 = null
        let fileUrl5 = null
        let fileUrl6 = null
        let fileUrl7 = null
        let fileUrl8 = null

        if (file) {
          fileUrl = await uploadToS3(file, loggedInUser.id, 'uploadPhotoNode')
        }
        if (file2) {
          fileUrl2 = await uploadToS3(file2, loggedInUser.id, 'uploadPhotoNode')
        }
        if (file3) {
          fileUrl3 = await uploadToS3(file3, loggedInUser.id, 'uploadPhotoNode')
        }
        if (file4) {
          fileUrl4 = await uploadToS3(file4, loggedInUser.id, 'uploadPhotoNode')
        }
        if (file5) {
          fileUrl5 = await uploadToS3(file5, loggedInUser.id, 'uploadPhotoNode')
        }
        if (file6) {
          fileUrl6 = await uploadToS3(file6, loggedInUser.id, 'uploadPhotoNode')
        }
        if (file7) {
          fileUrl7 = await uploadToS3(file7, loggedInUser.id, 'uploadPhotoNode')
        }
        if (file8) {
          fileUrl8 = await uploadToS3(file8, loggedInUser.id, 'uploadPhotoNode')
        }
        await client.photo.update({
          where: {
            id,
          },
          data: {
            ...(file && { file: fileUrl }),
            ...(file2 && { file2: fileUrl2 }),
            ...(file3 && { file3: fileUrl3 }),
            ...(file4 && { file4: fileUrl4 }),
            ...(file5 && { file5: fileUrl5 }),
            ...(file6 && { file6: fileUrl6 }),
            ...(file7 && { file7: fileUrl7 }),
            ...(file8 && { file8: fileUrl8 }),
            caption,
            skils,
            subject,
            subject2,
            subject3,
            subject4,
            subject5,
            subject6,
            subject7,
            subject8,
            user: {
              connect: {
                id: loggedInUser.id,
              },
            },
          },
        })

        return {
          ok: true,
        }
      },
    ),
  },
}
