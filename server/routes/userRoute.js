import express from 'express'
import { allUsers, createUser, oneUser, updateUser, uploadUserPhoto } from '../controllers/userController.js'

const userRoute = express.Router()

userRoute.route('/').get(allUsers).post(createUser)
userRoute.route('/getMe').post(oneUser)
userRoute.patch('/update', uploadUserPhoto, updateUser)
export default userRoute
