import { NextResponse } from "next/server";
import { User } from "@/models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(request) {
    
    try {
        const {email, password} = await request.json();
        
        // 1.
        const user = await User.findOne({ email });
        console.log("user: ", user);
        
        if(user == null) {
            return NextResponse.json({
                message: "User not found",
                success: false
            }, {
                status: 404
            })
        }

        // 2.
        const matched = bcrypt.compareSync(password, user.password);

        if(!matched) {
            return NextResponse.json({
                message: "Password not matched",
                success: false
            }, {
                status: 401
            })
        }

        // 3.
        const token = jwt.sign({
            _id: user._id,
            name: user.name
        }, process.env.JWT_KEY)

        console.log(token);

        // 4.
        const response = NextResponse.json({
            message: "Login Success !!",
            success: true,
            user: user
        })

        response.cookies.set("authToken", token, {
            expiresIn: "1d",
            httpOnly: true
        })

        return response;
    }
    catch(error) {
        return NextResponse.json({
            message: "Error during login : " + error.message,
            success: false
        }, {
            status: 500
        })
    }
}