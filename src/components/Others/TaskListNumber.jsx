import React from "react";

const TaskListNumber = ({data}) => {
    // if (!data || !data.taskCounts) {
    //     return null; // or you can return a loading indicator or some default content
    // }
    // console.log(data)
    return(
        <div className="flex screen mt-10 justify-between gap-5">
            <div className="w-[45%] py-6 px-9 rounded-xl bg-red-400">
                <h2 className="text-2xl"> {data.taskCounts.newTask} </h2>
                <h3 className="text-xl font-medium"> New Task </h3>
            </div>
            <div className="w-[45%] py-6 px-9 rounded-xl bg-emerald-400">
                <h2 className="text-2xl"> {data.taskCounts.completed} </h2>
                <h3 className="text-xl font-medium"> Completed Task </h3>
            </div>
            <div className="w-[45%] py-6 px-9 rounded-xl bg-blue-400">
                <h2 className="text-2xl"> {data.taskCounts.active} </h2>
                <h3 className="text-xl font-medium"> Active Task </h3>
            </div>
            <div className="w-[45%] py-6 px-9 rounded-xl bg-green-400">
                <h2 className="text-2xl"> {data.taskCounts.failed} </h2>
                <h3 className="text-xl font-medium"> Failed Task </h3>
            </div>

        </div>
    )
}

export default TaskListNumber