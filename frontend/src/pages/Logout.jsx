import axios from "axios"
import { useEffect } from "react"


export const Logout = ()=>{
    useEffect(()=>{
        axios.post("/sales/logout")
    })
    return( 
        <div className="flex flex-row p-5 items-center">
         <h1 className="text-3xl font-bold p-4">User Logout successful</h1>
         <a className="p-2 border border-gray-300 bg-blue-500 text-white rounded-md" href="/login">
          Login
          </a>
        </div>
    )
}

