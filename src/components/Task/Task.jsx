import React from "react";
import styles from "./task.module.css";
import {Counter} from "../Counter/index"

const Task = () => {
  // NOTE: do not delete `data-testid` key value pair
  return (
    <li data-testid="task" className={styles.task}>
      <input type="checkbox" data-testid="task-checkbox" />
      <div data-testid="task-text"></div>
      <Counter/>
      <button data-testid="task-remove-button"></button>
    </li>
  );
};

export default Task;
