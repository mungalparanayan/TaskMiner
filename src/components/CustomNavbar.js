"use client";

import userContext from '@/context/userContext';
import { logout } from '@/services/userService';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react'
import { toast } from 'react-toastify';

const CustomNavbar = () => {

    const router = useRouter();
    const context = useContext(userContext);
    // console.log("context", context)

    const doLogout = async () => {
        try {
            const result = await logout();
            // console.log(result);
            context.setUser(null);
            router.push("/");
            toast.success("Logged out successfully", {
                position: "top-center"
            })
        }
        catch(error) {
            console.log(error);
            toast.error("Error in Logout", {
                position: "top-center"
            })
        }
    }

    return (
        <nav className="bg-blue-600 h-14 py-2 px-4 flex justify-between items-center">
            <div className="brand">
                <h1 className="text-2xl font-semibold">
                    <a href="#!">Task Miner</a>
                </h1>
            </div>
            <div>
                <ul className="flex space-x-4">
                    {context.user && (
                        <>
                            <li>
                                <Link href="/" className="hover:text-blue-200">Home</Link>
                            </li>
                            <li>
                                <Link href="/add-task" className="hover:text-blue-200">Add Task</Link>
                            </li>
                            <li>
                                <Link href="/show-tasks" className="hover:text-blue-200">Show Tasks</Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
            <div>
                <ul className="flex space-x-4">
                {context.user ? (
                        <>
                            <li>
                                <Link href="#!">{context.user.name}</Link>
                            </li>
                            <li>
                                <button onClick={doLogout}>Logout</button>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link href="/login">Login</Link>
                            </li>
                            <li>
                                <Link href="/signup">Signup</Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>    
    )
}

export default CustomNavbar
