import jwt from "jsonwebtoken"
import {AsyncHandle} from "../utils/AsyncHandle.js"
import {User} from "../models/user.model.js"


export const authJWT =AsyncHandle(async(req,_,next)=>{
          
            const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")
            
            if(!token){
              throw new Error("unauthorized request")
            }
            const codedToken = jwt.verify(token, process.env.ACCESS_TOKEN_KEY)
            console.log("decoded token", codedToken);
            const user = await User.findById(codedToken?._id)
            console.log(user);
            if(!user){
              throw new Error("Access token invalid or expired")
            }
            
            next()
         
})