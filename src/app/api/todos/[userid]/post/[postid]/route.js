import { NextResponse } from "next/server";

export function GET(request, {params}) {
    const { userid, postid } = params;
    console.log("User id is ", userid);
    console.log("Post id is ", postid);
    
    return NextResponse.json(params);
}