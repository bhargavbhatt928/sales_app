import dotenv from "dotenv"
import app from "./app.js"
import salesDBconnect from "./db/sales.db.js"
dotenv.config({
    path:"./.env"
})



salesDBconnect()
.then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console.log(`Server is listening on: ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("Mongodb connection failed !!", err);
})








