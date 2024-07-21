"use client";
import userContext from '@/context/userContext';
import { login } from '@/services/userService';
import { useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify';

const Login = () => {

    const router = useRouter();
    const context = useContext(userContext);

    const [loginData, setLoginData] = useState({
      email: "",
      password: ""
    })

    const loginForm = async (event) => {
      event.preventDefault();
      console.log(loginData);

      if(loginData.email.trim() === "" || loginData.password.trim() === "") {
        toast.info("Invalid Data !!", {
          position: "top-center",
        })
        return;
      }

      try {
        const result = await login(loginData);
        console.log(result);

        toast.success("Logged in", {
          position: "top-center"
        })
        context.setUser(result.user)  
        router.push("/");
      }
      catch(error) {
        console.log(error);
        toast.error(error.response.data.message, {
          position: "top-center"
        })
      }      
    }

    return (
      <div className="grid grid-cols-12">
          <div className="col-span-4 col-start-5 p-5">
              <div className="p-2">
                  {/* <div className="flex justify-center mb-8">
                      <Image src={loginsvg} style={{
                          width: "50%"
                      }} 
                      alt="Login Banner" />
                  </div> */}
                  <h1 className="text-3xl text-center">Login here</h1>

                  <form action="#!" className="mt-5" onSubmit={loginForm}>
                
                      {/* email */}
                      <div className="mt-3">
                          <label htmlFor="user_email" className="block text-1xl font-medium mb-2 ps-2">Email</label>
                          <input 
                              type="email" 
                              id="user_email" 
                              className="w-full p-3 rounded-2xl bg-gray-600 focus:ring-gray-400 border border-gray-200" 
                              placeholder="Enter here"
                              name="user_email"
                              onChange={(event)=>{
                                  setLoginData({...loginData, email: event.target.value})
                              }}
                              value={loginData.email}
                          >
                          </input>
                      </div>

                      {/* password */}
                      <div className="mt-3">
                          <label htmlFor="user_password" className="block text-1xl font-medium mb-2 ps-2">Password</label>
                          <input 
                              type="password" 
                              id="user_password" 
                              className="w-full p-3 rounded-2xl bg-gray-600 focus:ring-gray-400 border border-gray-200" 
                              placeholder="Enter here"
                              name="user_password"
                              onChange={(event)=>{
                                  setLoginData({...loginData, password: event.target.value})
                              }}
                              value={loginData.password}
                          >
                          </input>
                      </div>

                      <div className="mt-8 text-center">
                          <button type="submit" className="px-3 py-2 bg-green-600 rounded hover:bg-green-400">Login</button>
                          <button type="button" className="ms-3 px-3 py-2 bg-orange-600 rounded hover:bg-orange-400">Reset</button>
                      </div>

                      {/* {JSON.stringify(loginData)}; */}

                  </form>
              </div>
          </div>
      </div>
    ) 
}

export default Login