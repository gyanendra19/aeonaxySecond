import User from "../model/userModel.js"
import appError from "../utils/appError.js"
import catchAsync from "../utils/catchAsync.js"
import cloudinary from "../utils/cloudinary.js"
import multer from "multer"

const storage = multer.diskStorage({
    filename: function (req,file,cb) {
      cb(null, file.originalname)
    }
  });
  
const upload = multer({storage: storage});
export const uploadUserPhoto = upload.single('image')

export const allUsers = catchAsync(async(req, res, next) => {

    const allUser = await User.find()

    if(!allUser){
        return next(new appError('No users found', 404))
    }

    res.status(200).json({
        status: 'success',
        data: allUser
    })
})

export const createUser = catchAsync(async(req, res, next) => {
    
    const newUser = await User.create(req.body)

    res.status(200).json({
        status: 'success',
        data: newUser
    })
})

export const oneUser = async(req, res, next) => {
    const {email} = req.body
    const user = await User.findOne({email})

    if(!user){
       return next(new appError('No user with that email', 404))
    }
    
    res.status(200).json({
        status: 'success',
        data: user
    })
}

export const updateUser = catchAsync(async function(req, res, next){
    const {email} = req.params
    cloudinary.uploader.upload(req.file.path, async function (err, result){
        if(err) {
          console.log(err);
          return res.status(500).json({
            success: false,
            message: "Error"
          })
        }
        // console.log(email, 'email');
        // const update = {
        //     image: {
        //         public_id: result.public_id,
        //         url: result.secure_url
        //     }
        // }
        
        // const updatedUser = await User.findOneAndUpdate({email}, update)

        res.status(200).json({
          success: true,
          message:"Uploaded!",
          data: result,
        })
      })
})