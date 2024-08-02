import express from "express"
import cors from "cors"
import userRouter from "./routes/user.routes.js"
const app=express()
app.use(express.json())

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))
app.use("/sales",userRouter)


export default app