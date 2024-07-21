// localhost:3000/api/users/[userid]/tasks

import { getResponseMessage } from "@/helper/responseMessage"
import { Task } from "@/models/task";
import { NextResponse } from "next/server";

export async function GET(request, {params}) {
    const {userid} = params

    try {
        const tasks = await Task.find({
            userid: userid
            // first userid is the userid that is in the task schema and second userid is the userid that is getting from params
        })
        return NextResponse.json(tasks);
    }
    catch(error) {
        console.log(error)
        return getResponseMessage("Failed to get users task", 404, false);
    }
}