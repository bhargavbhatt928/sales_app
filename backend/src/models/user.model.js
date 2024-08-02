import mongoose,{Schema} from "mongoose";
import bcrypt from "bcrypt"


const userSchema=new Schema({
   firstName: {
     type:String,
     required:true,
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    }
},{timestamps:true})

/**
 * Middleware function that hashes the password before saving the user data.
 * @param {Function} next - The next function to be called in the middleware chain.
 */
userSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

/**
 * Check if the provided password matches the hashed password stored in the user document.
 * @param {string} password - The password to compare with the hashed password.
 * @returns {Promise<boolean>} A promise that resolves to true if the passwords match, false otherwise.
 */
userSchema.methods.isPassCorrect = async function(password){
    return await bcrypt.compare(password, this.password);
}
export const User = mongoose.model("User",userSchema)