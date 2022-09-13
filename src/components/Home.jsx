import { useEffect } from "react";
import { useState } from "react";



const Home = () => {

    const [addtask,setAddTask]=useState("");
    var [data,setdata]=useState()
    // const [Id,setId]=useState()
const[endtime,setEndtime]=useState("On going")
 
    // console.log(localStorage.getItem("addtask"));

   

    useEffect(()=>{
if(localStorage.getItem("addtask")===null)
{
    localStorage.setItem("addtask","[]")
}else{
let x=localStorage.getItem("addtask");
x=JSON.parse(x)
setdata(x)

}
 },[])

 let complete=(id,day,month,year,hour,min,)=>{

    var end=new Date()
    var d=Math.abs(day-end.getDate())
    var m=Math.abs(month-end.getMonth()-1)
    var y=Math.abs(year-end.getFullYear())

 var  h=Math.abs(hour-end.getHours())
 var minu=Math.abs(min-end.getMinutes())

setEndtime(`${d}-${m}-${y} time:${h}hours${minu}min`)
 console.log(endtime,"endtime")
}


 let handleTask=()=>{

        var add=localStorage.getItem("addtask");
        add=JSON.parse(add)

        console.log(add , typeof add);

        var start=new Date();
        add.push({id:(add.length+1),taskname:addtask, day:start.getDate(),month:start.getMonth()+1,year:start.getFullYear(),hour:start.getHours(), min:start.getMinutes(), endTime:endtime});
        console.log(add , typeof add);
        add=JSON.stringify(add);
        console.log(add);
        localStorage.setItem("addtask", add)
    }

    return (
        <div id="task-detail">
            <h1>task time tracker</h1>
            <hr />
            <div id="tsks">
                <div id="header">
                    <h2>task name</h2>
                    <h2>start date</h2>
                    <h2>end date</h2>
                    <h2>action</h2>

                </div>
                {data &&data.map((data)=>{return<div id="content">
                <h2>{data.taskname}</h2>
                <h2>{`${data.day}-${data.month}-${data.year} time:  ${data.hour}hour:${data.min}min`}</h2>
                <h2>{data.endTime}</h2>
                <h2>
                    <button id="complete" onClick={()=>{complete(data.id,data.day,data.month,data.year, data.hour,data.min)}} >Complete</button>
                </h2>

            </div>
                })}
                
            </div>          
<form >
<label htmlFor="add">Add task:</label><input id="add" type="text" value={addtask} onChange={(e) => { setAddTask(e.target.value) }} /> <br /><br />
            <input type="submit" value={"Add Task"} id="submit" onClick={handleTask} />
            </form>
        </div>
    );
}

export default Home;






































// import { useEffect } from "react";
// import { useState } from "react";



// const Home = () => {
//     const [addtask, setAddTask] = useState(null)


//     useEffect(() => {
//         if (localStorage.getItem("addtask") == null) 
//         {
//             localStorage.setItem("addtask", "[]")
//         }

//     }, [])

//     var [current, setcurrent] = useState("");

//     var handleTask = () => {
//         var time = new Date()
//         setcurrent(time.toLocaleString())
        
//         var add=localStorage.getItem("addtask");
//         add=JSON.parse(add)
//         console.log(add , typeof add);
//         add.push(addtask);
//         console.log(add , typeof add);
//         add=JSON.stringify(add);
//         console.log(add);
//         localStorage.setItem("addtask", add)
//     }

// let storage=localStorage.getItem("addtask");
// console.log(storage);

//     return (
//         <div id="task-detail">
//             <h1>task time tracker</h1>
//             <hr />
//             <div id="tsks">
//                 <div id="header">
//                     <h2>task name</h2>
//                     <h2>start date</h2>
//                     <h2>end date</h2>
//                     <h2>action</h2>

//                 </div>
//                 <div id="content">
//                     <h2>{storage}</h2>
//                     <h2>{current}</h2>
//                     <h2>end date</h2>
//                     <h2>action</h2>

//                 </div>
//             </div>


//             <label htmlFor="add">Add task:</label>

//             <input id="add" type="text" value={addtask} onChange={(e) => { setAddTask(e.target.value) }} /> <br /><br />
//             <input type="submit" value={"Add Task"} id="submit" onClick={handleTask} />

//         </div>
//     );
// }

// export default Home;











