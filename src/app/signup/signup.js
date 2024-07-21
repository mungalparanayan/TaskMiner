"use client";
import Image from 'next/image';
import React, { useState } from 'react'
import signupsvg from '@/assets/signup.svg'
import { toast } from 'react-toastify';
import { signUp } from '@/services/userService';
import { useRouter } from 'next/navigation';

const signup = () => {

    const router = useRouter();

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        about: "",
        profileURL: "https://img.freepik.com/premium-vector/anonymous-user-circle-icon-vector-illustration-flat-style-with-long-shadow_520826-1931.jpg?size=338&ext=jpg&ga=GA1.1.1412446893.1704585600&semt=ais"
    })

    const doSignup = async (event) => {
        event.preventDefault();

        console.log(data);

        if(data.name.trim() === '' || data.name == null) {
            toast.warning("Name is required", {
                position: "top-center"
            });
            return;
        }

        // all other validation is here 

        try {
            const result = await signUp(data);
            console.log(result);

            toast.success("User is registered !!", {
                position: "top-center"
            })

            setData({
                name: "",
                email: "",
                password: "",
                about: ""
            })

            router.push('../login');
        }
        catch(error) {
            console.log(error);
            toast.warning("User is already registered !!", {
                position: "top-center"
            })
        }
    }

    const resetData = () => {
        setData({
            name: "",
            email: "",
            password: "",
            about: ""
        })
    }

    return (
        <div className="grid grid-cols-12">
            <div className="col-span-4 col-start-5 p-5">
                <div className="p-2">
                    <div className="flex justify-center mb-8">
                        <Image src={signupsvg} style={{
                            width: "50%"
                        }} 
                        alt="Signup Banner" />
                    </div>
                    <h1 className="text-3xl text-center">Signup here</h1>
                    <form action="#!" className="mt-5" onSubmit={doSignup}>
                        
                        {/* name */}
                        <div className="mt-3">
                            <label htmlFor="user_name" className="block text-1xl font-medium mb-2 ps-2">Username</label>
                            <input 
                                type="text" 
                                className="w-full p-3 rounded-2xl bg-gray-600 focus:ring-gray-400 border border-gray-200" 
                                placeholder="Enter here"
                                id="user_name"
                                name="user_name"
                                onChange={(event)=>{
                                    setData({...data, name: event.target.value})
                                }}
                                value={data.name}
                            >
                            </input>
                        </div>

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
                                    setData({...data, email: event.target.value})
                                }}
                                value={data.email}
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
                                    setData({...data, password: event.target.value})
                                }}
                                value={data.password}
                            >
                            </input>
                        </div>

                        {/* about section */}
                        <div className="mt-3">
                            <label htmlFor="user_about" className="block text-1xl font-medium mb-2 ps-2">About</label>
                            <textarea 
                                rows={4} 
                                className="w-full p-3 rounded-2xl bg-gray-600 focus:ring-gray-400 border border-gray-200" 
                                placeholder="Enter here"
                                id="user_about"
                                name="user_about"
                                onChange={(event)=>{
                                    setData({...data, about: event.target.value})
                                }}
                                value={data.about}
                            >
                            </textarea>
                        </div>

                        <div className="mt-3 text-center">
                            <button type="submit" className="px-3 py-2 bg-green-600 rounded hover:bg-green-400">Signup</button>
                            <button onClick={resetData} type="button" className="ms-3 px-3 py-2 bg-orange-600 rounded hover:bg-orange-400">Reset</button>
                        </div>

                        {/* {JSON.stringify(data)}; */}

                    </form>
                </div>
            </div>
        </div>
    )
}

export default signup
