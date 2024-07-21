import { NextResponse } from "next/server";

export function POST(request) {

    const response = NextResponse.json({
        message: "Logout successfully",
        success: true
    })

    response.cookies.set("authToken", "", {
        expiresIn: new Date(0),
        httpOnly: true
    });

    return response;
}