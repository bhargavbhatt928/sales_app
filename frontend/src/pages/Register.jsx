import axios from "axios"
import { useState } from "react";

const Register = () => {
const [user, setUser] = useState({
  firstName:"",
  lastName:"",
  email:"",
  password:""
})

const onRegister =async (e)=>{
  e.preventDefault()
  try {

    const res = await axios.post("/sales/register",user);
    console.log("registration successful", res.data)
    window.location="/login"
  } catch (error) {
    console.log("Registration failed");
    
  }
}
    return (
        <div className="flex flex-col items-center min-h-screen">
        <h1 className="text-3xl font-bold pt-4">REGISTRATION FORM</h1>
        <hr/>
        <form  className="flex flex-col mt-4 mx-auto w-full px-4 space-y-4">
        <label className="block leading-4 pt-2">First Name</label>
        <input
        type="text"
        value={user.firstName}
        onChange={(e)=>setUser({...user, firstName: e.target.value})}
         className="block w-full rounded-sm border-0 py-1.5 ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6"
        />
        <label className="block leading-4 pt-2">Last Name</label>
        <input
        type="text"
        value={user.lastName}
        onChange={(e)=>setUser({...user, lastName:e.target.value})}
         className="block w-full rounded-sm border-0 py-1.5 ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6"
        />
          <label className="block leading-4 pt-2">Email</label>
        <input
        type="email"
        value={user.email}
        onChange={(e)=>setUser({...user, email:e.target.value})}
         className="block w-full rounded-sm border-0 py-1.5 ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6"
        />
             <label className="block leading-4 pt-2">Password</label>
        <input
        type="password"
        value={user.password}
        onChange={(e)=>setUser({...user, password:e.target.value})}
         className="block w-full rounded-sm border-0 py-1.5 ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6"
        />
        <button className="p-2 border border-gray-300 bg-blue-500 text-white w-full rounded-md" onClick={onRegister}>
          Submit
          </button>
        </form>
     
        </div>
    );
}

export default Register;
