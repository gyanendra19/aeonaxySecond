import express from 'express'
import dotenv from 'dotenv';
dotenv.config({path: './.env'})
import cors from 'cors'
import  mongoose  from 'mongoose';
import userRoute from './routes/userRoute.js';
import globalErrorHandling from './controllers/errorController.js'
import emailRoute from './routes/emailRoute.js';


const app = express()
app.use(cors())
app.use(express.urlencoded({extended: true , limit: '50mb'}))
app.use(express.json())
mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('Connected to database');
})

app.use('/api/v1/user', userRoute)
app.use('/api/sendemail', emailRoute)
app.use(globalErrorHandling)

app.listen(process.env.PORT, () => {
    console.log('Connected to port 4888');
})