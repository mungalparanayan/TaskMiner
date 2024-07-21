"use client";

import React, { useEffect, useState } from 'react'
import userContext from './userContext'
import { toast } from 'react-toastify';
import { currentUser } from '@/services/userService';

const UserProvider = ({children}) => {

    const [user, setUser] = useState(null);

    useEffect(()=>{
        const load = async () => {
            try {   
                const logUser = await currentUser();
                // console.log("logUser:", logUser);
                setUser({...logUser});
                toast.success({
                    message: 'User loaded successfully'
                });
            }
            catch(error) {
                console.log(error);
                // toast.dismiss();
                // toast.warning("Please, Login first", {
                //     position: "top-center"
                // })
                setUser(null);
            }
        }
        if(!user) {
            load();
        }
    }, []);

    return (
        <userContext.Provider value={{user, setUser}}>
            {children}
        </userContext.Provider>
    )
}

export default UserProvider