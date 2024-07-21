"use client";

import userContext from '@/context/userContext';
import { getTaskOfUser } from '@/services/taskService';
import React, { useContext, useEffect, useState } from 'react'
import Task from '@/app/show-tasks/Task'
import { toast } from 'react-toastify';
import { deleteTask } from '@/services/taskService';

const showTasks = () => {

    const [tasks, setTasks] = useState([]);
    const context = useContext(userContext);

    async function loadTasks(userid) {
        try {
            const tasks = await getTaskOfUser(userid);
            setTasks([...tasks].reverse());
            console.log(tasks);
        }
        catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if(context.user) {
            loadTasks(context.user._id);
        }
    }, [context.user])

    async function deleteTaskParent(taskid) {
        try {
            const result = await deleteTask(taskid);
            console.log(result);
            const newTask = tasks.filter(item => item._id != taskid);
            setTasks(newTask);

            // toast.success("Your task is deleted", {
            //     position: "top-center"
            // });
        }
        catch(error) {
            console.log(error);
            toast.error("Error in deleting task", {
                position: "top-center"
            })
        }
    }

    return (
        <div className="grid grid-cols-12 mt-3">
            <div className="col-span-6 col-start-4">
                <h1 className="text-2xl text-center m-5">Your tasks ({tasks.length})</h1>
                {tasks.length > 0 ? (
                    tasks.map((task) => (
                    <Task task={task} key={task._id} deleteTaskParent={deleteTaskParent}/>
                ))
            ) : (
                <p>No tasks to preview</p>
            )}
            </div>
        </div>
    )
}

export default showTasks
