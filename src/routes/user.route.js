import { userregister } from "../controllers/user.controller.js";
import { Router } from "express";

const route = Router();

route.route("/register").post(userregister)


export default route