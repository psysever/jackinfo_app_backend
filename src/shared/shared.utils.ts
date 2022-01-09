import AWS from 'aws-sdk'

const AWS_KEY: any = process.env.AWS_KEY
const AWS_SECRET: any = process.env.AWS_SECRET

AWS.config.update({
  credentials: {
    accessKeyId: AWS_KEY,
    secretAccessKey: AWS_SECRET,
  },
  region: 'ap-northeast-2',
})

//메인화면 업로드, 아바타 수정
export const uploadToS3 = async (file: any, userId: any, fileName: any) => {
  const { filename, createReadStream } = await file
  const readStream = createReadStream()
  const objectName = `${fileName}/${userId}-${Date.now()}-${filename}`
  const { Location } = await new AWS.S3()
    .upload({
      Bucket: 'showjack-uploads',
      Key: objectName,
      ACL: 'public-read',
      Body: readStream,
    })
    .promise()
  return Location
}

const Bucket = 'showjack-uploads'
const bucketInstance = new AWS.S3()

export const delPhotoS3 = async (fileUrl: any, folderName: any) => {
  const decodedUrl = decodeURI(fileUrl)
  const filePath = decodedUrl.split(`/${folderName}/`)[1] // 파일명만 split 후 선택

  const fileName = `${folderName}/${filePath}`
  const params = {
    Bucket: `${Bucket}`, // Bucket에 폴더 명 uploads 추가
    Key: fileName,
  }
  await bucketInstance
    .deleteObject(params, (error: any, data: any) => {
      if (error) {
        console.log(error)
      } else {
        console.log(data)
      }
    })
    .promise()
}
export const delVideoS3 = async (fileUrl: any, folderName: any) => {
  const decodedUrl = decodeURI(fileUrl)
  const filePath = decodedUrl.split('/')[4] // 파일명만 split 후 선택
  const fileName = `${folderName}/${filePath}`
  const params = {
    Bucket: `${Bucket}`, // Bucket에 폴더 명 uploads 추가
    Key: fileName,
  }

  await bucketInstance
    .deleteObject(params, (error: any, data: any) => {
      if (error) {
        console.log(error)
      } else {
        console.log(data)
      }
    })
    .promise()
}
