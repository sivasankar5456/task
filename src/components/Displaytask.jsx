import { useEffect } from "react";
import { useState } from "react";


const Displaytask = () => {

    let [multipleTask, setMultipleTask] = useState(null)

    useEffect(() => {
        let z = localStorage.getItem("tasks")
        z=JSON.parse(z)
        setMultipleTask(z)
    }, [])

let completeTask=(task)=>{

let start=task.start;
start=new Date(start)
var end=new Date();
    
let d=Math.abs(start.getDate()-end.getDate())
    // console.log(d);
let m=Math.abs(start.getMonth() -end.getMonth())
console.log(m);
let y=Math.abs(start.getFullYear() -end.getFullYear())

let h=Math.abs(start.getHours() -end.getHours())
let min=Math.abs(start.getMinutes() -end.getMinutes())

var endTime=`${d}-${m}-${y}- Hours:${h}min:${min}`
// console.log(endTime);

let t = localStorage.getItem("tasks");
t = JSON.parse(t);
// console.log(t.includes(t.id));
t.forEach((tsk)=>{
    if(tsk.id==task.id)
    {
        tsk.end = endTime; 
    }
})
console.log(t);
t = JSON.stringify(t);
localStorage.setItem("tasks", t);
window.location.reload();

}


    return (<div className="disply-task">
        <center>
        <h1>Task List</h1>
        <hr />
        {!multipleTask && <h1>No task adde, please Add some task</h1>}
        {multipleTask &&
            <table border="3px">
                <thead>
                    <tr>
                        <th>SNO</th>
                        <th>Task name</th>
                        <th>Start time</th>
                        <th>Status</th>
                        <th>Action</th>

                    </tr>
                </thead>

                <tbody>
                    {multipleTask.map((task) => {
                        return (
                            <tr>
                                <td>{task.id}</td>
                                <td>{task.task}</td>
                                <td>{task.start}</td>
                                <td>{task.end}</td>
                                <td> <button id="btn" onClick={()=>{completeTask(task)}}>complete</button> </td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </table>
        }
        </center>
    </div>);
}

export default Displaytask;














