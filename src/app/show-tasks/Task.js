// "use client";

// import userContext from '@/context/userContext'
// import React, { useContext, useState } from 'react'
// import { RxCross1 } from "react-icons/rx";
// import { FaEdit } from "react-icons/fa";
// import Swal from 'sweetalert2';
// import 'sweetalert2/dist/sweetalert2.min.css';
// import { useRouter } from 'next/navigation';
// import { toast } from 'react-toastify';
// import UpdateTask from '../update-task/updateTask'; 

// const Task = ({task, deleteTaskParent}) => {
//     const [updateTask, setUpdateTask] = useState(null);

//     const router = useRouter();     
//     const { user } = useContext(userContext);
    
//     const confirmDelete = async () => {
//         const result = await Swal.fire({
//             title: 'Are you sure?',
//             text: "You won't be able to revert this!",
//             icon: 'warning',
//             showCancelButton: true,
//             confirmButtonColor: '#3085d6',
//             cancelButtonColor: '#d33',
//             confirmButtonText: 'Yes, delete it!',
//         });
    
//         return result.isConfirmed;
//     };
    
//     const deleteTaskUser = async (taskid) => {
//         const shouldDelete = await confirmDelete();
    
//         if (shouldDelete) {
//             deleteTaskParent(taskid);

//             toast.success("Your task is deleted", {
//                 position: "top-center"
//             });   
//         }
//     };

//     const deleteTaskUserWithoutPermission = async (taskid) => {
//         deleteTaskParent(taskid);
//     }

//     const handleUpdate = () => {
        
//         router.push('/update-task');
//         deleteTaskUserWithoutPermission(task._id);
//     }

//     return (
//         <div>
//             <div className={`${task.status === "completed" ? "bg-green-800" : "bg-gray-800"} shadow-lg m-5 rounded-md`}>
//                 <div className="p-5">
//                     <div className="flex justify-between">
//                         <h1 className="text-xl font-semibold mb-1">{task.title}</h1>
//                         <div className="flex">
//                             {/* <span onClick={()=> {UpdateTaskUser(task._id)}} className="mr-3 shadow-lg bg-gray-800 hover:bg-gray-700 rounded-full text-sm h-6 w-6 flex justify-center items-center cursor-pointer"> */}
//                             <span onClick={()=> {handleUpdate()}} className="mr-3 shadow-lg bg-gray-800 hover:bg-gray-700 rounded-full text-sm h-6 w-6 flex justify-center items-center cursor-pointer">
//                                 <FaEdit />
//                             </span>
//                             <span onClick={()=> {deleteTaskUser(task._id)}} className="shadow-lg bg-gray-800 hover:bg-gray-700 rounded-full text-sm h-6 w-6 flex justify-center items-center cursor-pointer">
//                                 <RxCross1 />
//                             </span>
//                         </div>
//                     </div>
//                     <p className="font-normal text-xl">{task.content}</p>
//                     <div className="flex justify-between mt-3">
//                         <p className="text-left text-sm">Status : <span className="font-bold">{task.status}</span></p>
//                         <p className="text-right text-sm">Author : <span className="font-bold">{user?.name}</span></p>
//                     </div>
//                 </div>
//             </div> 
//             {updateTask}
//         </div>
//     )
// }

// export default Task

// Task.js

import userContext from '@/context/userContext'
import React, { useContext, useState } from 'react';
import { RxCross1 } from "react-icons/rx";
import { FaEdit } from "react-icons/fa";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import UpdateTask from '../update-task/updateTask'; 
import { toast } from 'react-toastify';

const Task = ({ task, deleteTaskParent }) => {
    const [updateTask, setUpdateTask] = useState(null);

    const { user } = useContext(userContext);
    
    const confirmDelete = async () => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        });
    
        return result.isConfirmed;
    };
    
    const deleteTaskUser = async (taskid) => {
        const shouldDelete = await confirmDelete();
    
        if (shouldDelete) {
            deleteTaskParent(taskid);
            toast.success("Task deleted successfully", {
                position: "top-center"
            })
        }
    };

    const deleteTaskUserWithoutPermission = async (taskid) => {
        console.log(taskid);
        deleteTaskParent(taskid);
    }

    const handleUpdate = () => {
        setUpdateTask({
            updateTitle: task.title,
            updateContent: task.content,
            updateStatus: task.status,
        });
    }

    return (
        <div>
            <div className={`${task.status === "completed" ? "bg-green-800" : "bg-gray-800"} shadow-lg m-5 rounded-md`}>
                <div className="p-5">
                    <div className="flex justify-between">
                        <h1 className="text-xl font-semibold mb-1">{task.title}</h1>
                        <div className="flex">
                            <span onClick={handleUpdate} className="mr-3 shadow-lg bg-gray-800 hover:bg-gray-700 rounded-full text-sm h-6 w-6 flex justify-center items-center cursor-pointer">
                                <FaEdit />
                            </span>
                            <span onClick={() => deleteTaskUser(task._id)} className="shadow-lg bg-gray-800 hover:bg-gray-700 rounded-full text-sm h-6 w-6 flex justify-center items-center cursor-pointer">
                                <RxCross1 />
                            </span>
                        </div>
                    </div>
                    <p className="font-normal text-xl">{task.content}</p>
                    <div className="flex justify-between mt-3">
                        <p className="text-left text-sm">Status : <span className="font-bold">{task.status}</span></p>
                        <p className="text-right text-sm">Author : <span className="font-bold">{user?.name}</span></p>
                    </div>
                </div>
            </div> 
            {updateTask && <UpdateTask {...updateTask}
                                       taskIdDelete={task._id}
                                       deleteTaskUserWithoutPermission={deleteTaskUserWithoutPermission} />}
        </div>
    );
}

export default Task;
