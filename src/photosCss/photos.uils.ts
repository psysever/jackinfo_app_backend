export const processHashtags = (caption: any) => {
  const hashtags = caption.match(/#[\d|A-Z|a-z|ㄱ-ㅎ|ㅏ-ㅣ|가-힣]+/g) || []
  return hashtags.map((hashtag: any) => ({
    where: { hashtag },
    create: { hashtag },
  }))
}
