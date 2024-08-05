import { Router } from "express";
import { loginUser, registerUser } from "../controllers/user.controllers.js";
import { createProductEntry, topSales, totalRevenue } from "../controllers/product.controller.js";

const router=Router()


router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/newProductEntry").post(createProductEntry)
router.route("/topSales").get(topSales)
router.route("/totalRevenue").get(totalRevenue)

export default router