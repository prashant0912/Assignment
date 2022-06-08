import React from "react";
import styles from "./tasks.module.css";
import { useEffect, useState } from "react";
import {Task} from "../Task/index"


const Tasks = () => {
  const [data,setData] = useState([])
  console.log(data)
  useEffect(()=>{
    getdata()
  },[])


  const getdata = async ()=>{
    const data1 = await fetch("https://todoapp000.herokuapp.com/todo").then((d)=>
    d.json())
    setData(data1)
    
    
  }
  // NOTE: do not delete `data-testid` key value pair
  return (
    <>
      <ul data-testid="tasks" className={styles.tasks}>
        {data.map((e)=>{
          return <div>{e.text}
          <Task/></div>
        })}
      </ul>
      <div data-testid="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;
