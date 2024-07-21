import { getResponseMessage } from "@/helper/responseMessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";

// get single task
export async function GET(request, {params}) {
    const {taskid} = params;

    try {
        const task = await Task.findOne({
            _id: taskid
        })

        return NextResponse.json(task);
    }
    catch(error) {
        console.log(error);
        return getResponseMessage("Failed to get task", 404, false);
    }
}

// Update single Task
export async function PUT(request, {params}) {
    const {taskid} = params;
    const {title, content, status} = await  request.json();
    
    try {
        let task = await Task.findById(taskid);

        task.title = title,
        task.content = content,
        task.status = status

        const updatedTask = await task.save();
        return NextResponse.json(updatedTask);
    }
    catch(error) {
        console.log(error);
        return getResponseMessage("Failed to update task", 500, false);
    }
}

// Delete Single Task
export async function DELETE(request, {params}) {
    const {taskid} = params

    try {
        await Task.deleteOne({
            _id: taskid
        });
        return NextResponse.json({
            message: "Task deleted successfully",
            success: true
        })
    }
    catch(error) {
        console.log(error);
        return getResponseMessage("Failed to delete task", 500, false);
    }
}