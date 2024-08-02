
const Login = () => {
    return (
        <div className="flex flex-col items-center min-h-screen">
        <h1 className="text-3xl font-bold pt-4">LOGIN FORM</h1>
        <hr/>
        <form  className="flex flex-col mt-4 mx-auto w-full px-4 space-y-4">
          <label className="block leading-4 pt-2">Email</label>
        <input
        type="email"
         className="block w-full rounded-sm border-0 py-1.5 ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6"
        />
             <label className="block leading-4 pt-2">Password</label>
        <input
        type="password"
         className="block w-full rounded-sm border-0 py-1.5 ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6"
        />
        <button className="p-2 border border-gray-300 bg-blue-500 text-white w-full rounded-md">
          Submit
          </button>
        </form>
     
        </div>
    );
}

export default Login;
