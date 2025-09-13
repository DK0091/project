
import dotenv from "dotenv";
dotenv.config();
import connectdb from "./db/index.js";
import app from "./app.js";

const startApp = async () => {
    try {
        await connectdb();
        app.listen(process.env.PORT || 8000, () => {
            console.log(` Server running on port ${process.env.PORT || 8000}`);
        });
    } catch (error) {
        console.log("Error occurred", error);
    }
};


startApp();


/*
import express from 'express'
const app=express();

;(async()=>{
try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

    app.listen(process.env.PORT,()=>{
        console.log(`App is listening on port ${process.env.PORT}`)
    })

} catch (error) {
    console.error("Error",error)
}
})();

*/
