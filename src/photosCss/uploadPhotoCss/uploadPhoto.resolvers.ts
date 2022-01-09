import { protectResolver } from '../../users/users.utils'
import { uploadToS3 } from '../../shared/shared.utils'
import { processHashtags } from '../photos.uils'

import client from '../../client'
export default {
  Mutation: {
    uploadPhotoCss: protectResolver(
      async (
        _: any,
        {
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
        let hashtagObj = []
        if (caption) {
          hashtagObj = processHashtags(caption)
        }
        const fileUrl = await uploadToS3(
          file,
          loggedInUser.id,
          'uploadPhotoCss',
        )
        let fileUrl2 = null
        let fileUrl3 = null
        let fileUrl4 = null
        let fileUrl5 = null
        let fileUrl6 = null
        let fileUrl7 = null
        let fileUrl8 = null

        if (file2) {
          fileUrl2 = await uploadToS3(file2, loggedInUser.id, 'uploadPhotoCss')
        }
        if (file3) {
          fileUrl3 = await uploadToS3(file3, loggedInUser.id, 'uploadPhotoCss')
        }
        if (file4) {
          fileUrl4 = await uploadToS3(file4, loggedInUser.id, 'uploadPhotoCss')
        }
        if (file5) {
          fileUrl5 = await uploadToS3(file5, loggedInUser.id, 'uploadPhotoCss')
        }
        if (file6) {
          fileUrl6 = await uploadToS3(file6, loggedInUser.id, 'uploadPhotoCss')
        }
        if (file7) {
          fileUrl7 = await uploadToS3(file7, loggedInUser.id, 'uploadPhotoCss')
        }
        if (file8) {
          fileUrl8 = await uploadToS3(file8, loggedInUser.id, 'uploadPhotoCss')
        }
        return client.photoCss.create({
          data: {
            file: fileUrl,
            file2: fileUrl2,
            file3: fileUrl3,
            file4: fileUrl4,
            file5: fileUrl5,
            file6: fileUrl6,
            file7: fileUrl7,
            file8: fileUrl8,
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
            ...(hashtagObj.length > 0 && {
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
