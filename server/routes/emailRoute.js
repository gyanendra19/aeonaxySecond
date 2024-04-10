import express from 'express'
import { sendMail } from '../controllers/emailController.js'

const emailRoute = express.Router()

emailRoute.post('/', sendMail)

export default emailRoute