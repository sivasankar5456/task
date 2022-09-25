import { useEffect } from "react";
import { useState } from "react";


const Addtask = () => {


const [AddTask,setAddTask]=useState([]);
const [taskName,setTaskName]=useState("");

useEffect(()=>{
    if(localStorage.getItem("tasks")==null)
    {
        localStorage.setItem("tasks","[]")
    }else{
        let x=localStorage.getItem("tasks");
        x=JSON.parse(x)
        setAddTask(x)
    }
},[])


let handleSubmit=(e)=>{

    e.preventDefault();

    let y=localStorage.getItem("tasks");

    y=JSON.parse(y);
    y.push({id:(y.length +1), task:taskName, start: new Date().toLocaleString(), end:"ongoing" });

    y=JSON.stringify(y)
    localStorage.setItem("tasks",y)
    window.location.reload();
    console.log(y);
} 


    return ( <div className="enter-task">
<form onSubmit={handleSubmit} >
    <input type="text" required placeholder="Enter Task" value={taskName} onChange={(e)=>{setTaskName(e.target.value)}} />

<button id="btn1" type="submit">Add Task </button>

</form>
    </div> );
}
 
export default Addtask;













































































// import { useEffect, useState } from "react";

// const Addtask = () => {

//     const [AddTask, setAddTask] = useState([]);
//     const [taskName, setTaskName] = useState("");
// const[Id,setId]=useState(1);
//     useEffect(() => {

//         if (localStorage.getItem("tasks") == null) {
//             localStorage.setItem("tasks", "[]")
//         } else {
//             let x = localStorage.getItem("tasks");
//             x = JSON.parse(x)
//             setAddTask(x)
//         }

//     }, [])

//     let handleSubmit = (e) => {

//         e.preventDefault();

//         let y = localStorage.getItem("tasks");
//         let task = { taskname: taskName, startTime:new Date().toLocaleString(), endTime: "On Going" }
//        y=JSON.parse(y);
//        y.push(task);

//        y=JSON.stringify(y);
//        localStorage.setItem("tasks",y)
//     //    window.location.reload();

// console.log(y);

//     }


//     return (<div>
//         <h1>{taskName}</h1>
//         <form onSubmit={handleSubmit}>
//             <input type="text" required placeholder="Enter Task"
//                 value={taskName}
//                 onChange={(e) => { setTaskName(e.target.value) }} />
//             <button type="submit">Add Task</button>
//         </form>
//     </div>);
// }

// export default Addtask;



