import { connect } from 'mongoose';
import { app } from './app.js';
import dotenv from 'dotenv';
import connectDB from '../src/db/index.js';


dotenv.config({
    path: './.env'
})
const PORT = process.env.PORT || 8003

connectDB( )
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    })
})
.catch((err) => {
    console.log("Mongo connection error", err)
})