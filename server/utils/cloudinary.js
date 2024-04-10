import {v2 as cloudinary} from 'cloudinary';
import dotenv from 'dotenv';
dotenv.config({path: './config.env'})
          
cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.CLOUD_KEY, 
  api_secret: process.env.CLOUD_SECRET
});
console.log(process.env.CLOUD_NAME);
export default cloudinary;