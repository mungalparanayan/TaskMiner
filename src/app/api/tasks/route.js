import { getResponseMessage } from "@/helper/responseMessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

// Get all the tasks
export async function GET(request) {
    try {
        const tasks = await Task.find();
        return NextResponse.json(tasks);
    }
    catch(error) {
        console.log(error);
        return getResponseMessage("Failed to fetch all task", 404, false);
    }
}

// create all the tasks
export async function POST(request) {
    const {title, content, userid, status} = await request.json();

    const authToken = request.cookies.get("authToken")?.value;
    // console.log(authToken);
    const data = jwt.verify(authToken, process.env.JWT_KEY);
    // console.log(data);

    try {
        const task = await new Task({
            title,
            content,
            userid : data._id,
            status
        })

        const createdTask = await task.save()

        return NextResponse.json(createdTask, {
            status: 201,
        });
    }
    catch(error) {
        console.log(error);
        return NextResponse.json({
            message: "Failed to create task !!",
            success: false,
        });
    }
}