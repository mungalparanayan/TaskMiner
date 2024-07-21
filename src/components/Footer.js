"use client";

import React from 'react'

const Footer = () => {
  return (
    <footer className="h-40 bg-blue-600">
        <div className="flex p-5 justify-around items-center">
            <div className="text-center">
                <h1 className="text-3xl p-2">Welcome to work miner</h1>
                <p>Simplify your work life, boost productivity, and achieve your goals with Work Miner</p>
            </div>
            <div className="text-center">
                <h1 className="p-2">Important Links</h1>
                <ul>
                    <li><a href="#!">Facebook</a></li>
                    <li><a href="#!">Youtube</a></li>
                    <li><a href="#!">Instagram</a></li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer
