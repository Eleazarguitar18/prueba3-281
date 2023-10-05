import {v2 as cloudinary} from "module";

cloudinary.config({ 
    cloud_name: CLOUDINARY_CLOUD_NAME, 
    api_key: CLOUDINARY_API_KEY, 
    api_secret: CLOUDINARY_API_SECRET,
    secure: true
  });

export async function uploadImage(filePath) {
    return await 
    cloudinary.uploadImage.upload(filePath,{
        folder: 'denuncias'
    })
}