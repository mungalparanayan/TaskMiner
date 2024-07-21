import { connectDB } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"

connectDB();

// get users
export async function GET(request) {
    let user = [];
    try {
        user = await User.find().select("-password");
        console.log(user);
        
        return NextResponse.json(user);
    }
    catch(error) {
        console.log(error);
        return NextResponse.json({
            message: "Failed to get users",
            success: false
        })
    }

}

// create user
export async function POST(request) {
    const {name, email, password, about, profileURL} = await request.json();

    const mailId = await User.findOne({email});
    // console.log(mailId);
    if(mailId) {
        return;
    }

    const userdata = new User({
        name,
        email,
        password,
        about,
        profileURL
    })

    try {
        userdata.password = bcrypt.hashSync(userdata.password, parseInt(process.env.BCRYPT_SOLT)); // here solt comes from env file in string mode so parseInt is required
        console.log(userdata);
        const userSavedData = await userdata.save();

        const response = NextResponse.json(userdata, {
            status: 201,
        });

        return response;
    }
    catch(error) {
        console.log(error);
        return NextResponse.json({
            message: "failed to create user ! Error",
            status: false
        }, {
            statuscode: 500
        })
    }

    
    // const body = request.body;
    // console.log(body);

    // console.log(request.method);
    // console.log(request.cookies);
    // console.log(request.headers);
    // console.log(request.nextUrl.pathname);

    // const jsonData = await request.json();
    // console.log(jsonData);

    // const textData = await Response.text()
    // console.log(textData);

    // return NextResponse.json({
    //     "Message": "Post method"
    // });
}

// just for knowlegde 

// export function DELETE(request) {
//     console.log("delete api called")
//     return NextResponse.json({
//         message: "Deleted !!!",
//         status: true
//     },
//     {status: 201, statusText: "Hey changed text"}
//     )
// }

// export function PUT() {

// }