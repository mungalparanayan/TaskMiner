"use client";

import React from 'react';
import Image from 'next/image';
import bannerImage from '@/assets/contact.svg'

const HomeBanner = () => {
    return (
        <div className="bg-blue-400 text-white p-4 pt-10 text-center">
            <div className="container mx-auto flex items-center justify-around">
                <div className="mr-4">
                    <Image 
                        src={bannerImage}
                        alt="banner"
                        className="w-80 rounded-full"
                    />                    
                </div>    
                <div>
                    <h1 className="text-3xl font-semibold">Welcome to Task Miner</h1>
                    <p className="my-2">Organize your tasks efficiently with our task miner app.</p>
                    <button 
                        className="bg-white text-blue-500 px-4 py-2 mt-4 rounded-md shadow-md hover:text-blue-300"
                        onClick={()=>{
                            console.log("Action button clicked!");
                        }}
                    >
                        Learn More 
                    </button>
                </div> 
            </div>            
        </div>
    );
};

export default HomeBanner;