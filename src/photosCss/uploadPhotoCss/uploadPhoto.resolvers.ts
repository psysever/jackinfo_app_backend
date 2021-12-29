import { protectResolver } from '../../users/users.utils';
import { uploadToS3 } from '../../shared/shared.utils'
import { processHashtags } from '../photos.uils'

import client from '../../client'
export default {
  Mutation: {
    uploadPhotoCss: protectResolver(
      async (_:any, { file, caption, skils, subject, }:any, { loggedInUser }:any) => {
        let hashtagObj = [];
        if (caption) {
          hashtagObj = processHashtags(caption);
        }
        const fileUrl = await uploadToS3(file, loggedInUser.id, "uploadPhotoCss");
        return client.photoCss.create({
          data: {
            file: fileUrl,
            caption,
            skils,
            subject,
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
        });
      }
    ),
  },
};