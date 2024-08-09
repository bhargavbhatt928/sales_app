import {User} from "../models/user.model.js"
import {AsyncHandle} from "../utils/AsyncHandle.js"
import { ApiResponse } from "../utils/ApiResponse.js"

const generateAccessToken = async(userId)=>{
      try {
        const user = await User.findById(userId)
        const accessToken = user.AccessToken()
        console.log(accessToken);
        await user.save({ validateBeforeSave: false })
        return {accessToken}
      } catch (error) {
        throw new Error("Error occurred while generating access token")
      }
}

const registerUser =AsyncHandle(async(req,res)=>{
    const {firstName, lastName, email, password}=req.body
    if (
        [firstName, lastName, email, password].some((field)=>field?.trim()==="")
    ) {
        throw console.error("All fields are required",error);
    }
    const existedUser = await User.findOne({email})
    if(existedUser){
        throw new Error("User already Exists");
    }
   
    const user =await User.create({
        firstName,
        lastName,
        email,
        password
    })
const createdUser = await User.findById(user._id);
if(!createdUser){
    throw new Error("Internal Error occurred while registering user")
}
console.log(createdUser)
res
.status(200)
.json("User registered successfully")


})



const loginUser = AsyncHandle(async(req,res)=>{
    const {email, password}=req.body;
    if(!(email||password)){
        throw new Error("Please fill all the fields")
    }
    const user = await User.findOne({email});
    if (!user) {
        res.status(404)
        throw new Error("User Does not exists")
    }
    const isPassValid = await user.isPassCorrect(password)
    if(!isPassValid){
        res
        .status(401)
        .json("incorrect password")
        throw new Error("Incorrect PassWord")
       
    }
    const {accessToken} = await generateAccessToken(user._id)
    const loggedIn = await User.findById(user._id)
    const securityFlags ={
        httpOnly:true,
        secure:true
    }
    res
    .status(200)
    .cookie("accessToken", accessToken, securityFlags)
    .json(
        new ApiResponse(
            200,
            {
                user:loggedIn, accessToken
            },
            "user logged in"
        )
    )
  
    
})
const logOutUser =AsyncHandle(async(req,res)=>{
    const securityFlags ={
        httpOnly:true,
        secure:true
    }
    res
    .status(200)
    .clearCookie("accessToken", securityFlags)
    .json("User logged Out")
})
export 
{
    registerUser,
    loginUser,
    logOutUser
}