import React from 'react'
import ShowTasks from './ShowTasks'

export const metadata = {
    title: "All Tasks : Work Miner"
}

const ShowTasksPage = () => {
  return (
    <div className="text-3xl">
      <ShowTasks />
    </div>
  )
}

export default ShowTasksPage