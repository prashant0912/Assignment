import React from "react";
import styles from "./addTask.module.css";
import {useState} from "react"

const AddTask = () => {
  // NOTE: do not delete `data-testid` key value pair
  const [data,setData] = useState([])
  
const submit = (e)=>{
  e.preventDefault();
  fetch("https://todoapp000.herokuapp.com/todo",{
    method:"POST",
    headers:{
      "content-type":"application/json",
    },
    body:JSON.stringify(data)
  })

}
  return (
    <div className={styles.todoForm}>
      <form action="" onSubmit = {submit}>
      <input data-testid="add-task-input" type="text"  onChange = {(e)=>{
        setData(e.target.value)
      }}/>
      <button data-testid="add-task-button">+</button>
      </form>
    </div>
  );
};

export default AddTask;
