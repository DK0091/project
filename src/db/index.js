import mongoose from 'mongoose'
import {DB_NAME} from '../constants.js'

const connectdb = async () => {
    try{
        console.log("MONGODB_URI from env:", process.env.MONGODB_URI);
        const connectinstance = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`\n MongoDB connected !! DB HOST:${connectinstance.connection.host}`)
    } catch(error){
        console.log("MONGODB connection error ",error);
        process.exit(1)
    }
}

export default connectdb;