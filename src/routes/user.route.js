import { userregister } from "../controllers/user.controller.js";
import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";

const route = Router();

route.route("/register").post(
    upload.fields([{name:"avatar",maxCount:1},{name:"coverimg",maxCount:1}]),
    userregister)


export default route