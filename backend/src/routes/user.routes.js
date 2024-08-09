import { Router } from "express";
import { loginUser, registerUser, logOutUser } from "../controllers/user.controllers.js";
import { createProductEntry, topSales, totalRevenue } from "../controllers/product.controller.js";
import { authJWT } from "../middleware/user.auth.middleware.js";
const router=Router()


router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/logout").post(authJWT,logOutUser)
router.route("/newProductEntry").post(authJWT,createProductEntry)
router.route("/topSales").get(authJWT,topSales)
router.route("/totalRevenue").get(authJWT,totalRevenue)

export default router