import { User } from "@/models/user";
import { NextResponse } from "next/server";

// get single user
export async function GET(request, {params}) {
    const { userid } = params;

    try {
        const finduser = await User.findOne({
            _id: userid
        }).select("-password");
        // const finduser = await User.findById(userid);

        return NextResponse.json(finduser)
    }
    catch(error) {
        console.log(error);
        return NextResponse.json({
            message: "User not found",
            success: false
        });
    }
}

// delete user
export async function DELETE(request, {params}) {

    const { userid } = params;
    // console.log("User Id is ", userid);

    try {
        await User.deleteOne({
            _id: userid
        })

        return NextResponse.json({
            message: "used deleted successfully",
            success: true
        })
    }
    catch(error) {   
        return NextResponse.json({
            message: "Failed to delete user !",
            success: false
        })
    }
}

// update user
export async function PUT(request, {params}) {
    const { userid } = params

    const {name, password, about, profileURL} = await request.json();

    try {
        let user = await User.findById(userid)
        user.name = name
        user.password = password
        user.about = about
        user.profileURL = profileURL

        const updateduser = await user.save()
        return NextResponse.json(updateduser)
    }
    catch(error) {
        console.log(error);
        return NextResponse.json({
            message: "failed to update user !!",
            success: false
        });
    }
}