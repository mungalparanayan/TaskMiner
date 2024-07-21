"use client";

import { ContactUs } from '@/services/contactService';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const result = await ContactUs(formData)
            toast.success("Contact saved");
            
            setFormData({
                name: "",
                email: "",
                message: "" 
            })
        }
        catch(error) {
            toast.error("Contact failed");
        }
    };

    return (
        <div className="bg-blue-300 text-black mx-auto p-5 pb-10">
            <div className="text-center text-3xl text-gray-700">Contact Us</div>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-2 focus:text-blue-800 outline-blue-700 focus:shadow-outline"
                    placeholder="Your Name"
                    required
                />
                </div>
                <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-2 focus:text-blue-800 outline-blue-700 focus:shadow-outline"
                    placeholder="Your Email"
                    required
                />
                </div>
                <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-2 focus:text-blue-800 outline-blue-700 focus:shadow-outline h-32 resize-none"
                    placeholder="Your Message"
                    required
                ></textarea>
                </div>
                <div className="flex items-center justify-center">
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Submit
                </button>
                </div>
            </form>

            {/* {JSON.stringify(formData)}; */}

        </div>
    );
};

export default ContactForm;
