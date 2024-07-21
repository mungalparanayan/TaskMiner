import { connectDB } from "@/helper/db";
import { Contact } from "@/models/contact";
import { NextResponse } from "next/server";

connectDB();

export async function POST(request) {
    try {
        const {name, email, message} = await request.json();

        const contactUser = new Contact({
            name,
            email,
            message
        });

        const result = await contactUser.save();

        console.log(result);
        return NextResponse.json(result);
    }
    catch(error) {
        console.log("Failed to save contact", {
            success: false
        }, {
            statusCode: 500,
        })
        console.log(error);
    }
}