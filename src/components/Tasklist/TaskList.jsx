import React from "react";
import AcceptTask from "./AcceptTask";
import CompletedTask from "./CompletedTask";
import NewTask from "./NewTask";
import FailedTask from "./FailedTask";

// const TaskList = ({data}) => {


//     return (
//         <div id="taskList" className="h-[55%] w-full py-5 mt-10 overflow-x-auto flex items-center justify-start gap-5 flex-nowrap">
//             {data.tasks.map((elem, idx)=> {
//                     if(elem.active) {
//                         return <AcceptTask key={idx} data={elem}/>
//                     }
//                     if(elem.newTask) {
//                         return <NewTask key={idx} data={elem}/>
//                     } 
//                     if(elem.completed) {
//                         return <CompletedTask key={idx} data={elem}/>
//                     }
//                     if(elem.failed) {
//                         return <FailedTask key={idx} data={elem}/>
//                     }

//             })}
//         </div> 
//     );
// }

const TaskList = ({ data }) => {

    // if (!tasks || !Array.isArray(tasks)) {
    //     return null; 
    // }

    return (
        <div id="taskList" className="h-[55%] w-full py-5 mt-10 overflow-x-auto flex items-center justify-start gap-5 flex-nowrap">/
            {data.tasks.map((elem, index) => {
                if (elem.active) {
                    return <AcceptTask key={index} data={elem} />
                }
                if (elem.newTask) {
                    return <NewTask key={index} data={elem} />
                }
                if (elem.completed) {
                    return <CompletedTask key={index} data={elem} />
                }
                if (elem.failed) {
                    return <FailedTask key={index} data={elem} />
                }
            })}
        </div>
    );
};

export default TaskList;    