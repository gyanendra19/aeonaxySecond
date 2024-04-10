import {Resend} from 'resend'
import dotenv from 'dotenv';
import catchAsync from '../utils/catchAsync.js';
dotenv.config({path: './.env'})

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendMail = catchAsync(async(req, res) => {

    const {name, email} = req.body
    const send = await resend.emails.send({
        from: 'Gyanendra <harfanmaula4@gmail.com>',
        to: email,
        subject: 'Welcome to driblle',
        html: `<p>Welcome ${name}, We are overwhelmed to welcome you to our community of designers</p>`,
      })

      if(send.data){
        return res.status(200).json({
            status: 'success',
            message: send.data
        })
      }else{
        return res.status(400).json({
            status: 'error',
            message:send.error
        })
      }
})