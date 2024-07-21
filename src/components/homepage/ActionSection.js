"use client";

import React from 'react';

const ActionSection = () => {
    return (
        <div className="bg-blue-400 text-white p-4 text-center">
            <div className="container mx-auto flex items-center justify-around p-10">
                <div>
                    <h1 className="text-3xl font-semibold">Take Control of Your Tasks</h1>
                    <p className="my-2">Start managing your tasks efficiently with our task miner app.</p>
                    <button 
                        className="bg-white text-blue-500 px-4 py-2 mt-4 rounded-md shadow-md hover:text-blue-300"
                        onClick={()=>{
                            console.log("Action button clicked!");
                        }}
                    >
                        Get started 
                    </button>
                </div> 
            </div>            
        </div>
    );
};

export default ActionSection;