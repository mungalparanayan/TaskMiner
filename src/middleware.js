import { NextResponse } from "next/server";
// import { NextRequest } from "next/server";

export function middleware(request) {
    console.log("middleware executed");

    const authToken = request.cookies.get("authToken")?.value;

    if(request.nextUrl.pathname === "/api/login" || request.nextUrl.pathname === "/api/users") {
        return;
    }

    const loggedInUserNotAccessed = request.nextUrl.pathname === "/login"
                                    || request.nextUrl.pathname === "/signup"

    if(loggedInUserNotAccessed) {
        if(authToken) {
            return NextResponse.redirect(new URL("/", request.url));
        }
    }
    else {
        if(!authToken) {
            if(request.nextUrl.pathname.startsWith("/api")) {
                return NextResponse.json({
                    message: "Access Denied",
                    success: false
                }, {
                    status:401
                })
            }
            return NextResponse.redirect(new URL("/login", request.url));
        }
    }
}

export const config = {
    matcher: [
        "/", 
        "/login",
        "/signup",
        "/add-task",
        "/show-tasks",
        "/public/:path*",
        "/api/:path*"
    ],
}