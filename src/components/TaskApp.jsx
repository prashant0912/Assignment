import React from "react";
import {Tasks} from "./Tasks"
import styles from "./taskApp.module.css";
import {AddTask} from "./AddTask"
import { TaskHeader } from "./TaskHeader";

export const TaskApp = () => {
  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-app" className={styles.taskApp}>
      {/* Header */}
      <TaskHeader />
      {<AddTask/>}
      {<Tasks/>}
    </div>
  );
};


