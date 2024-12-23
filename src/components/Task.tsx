import { Check, Trash } from "phosphor-react";
import styles from "./Task.module.css";
import { Task as TaskType } from "../types/types";

export type TaskProps = {
  task: TaskType;
  removeTask: (task: TaskType) => void;
  checkTask: (task: TaskType) => void;
}

export function Task({ checkTask, task, removeTask }: TaskProps) {

  function handleDelete(): void {
    removeTask(task);
  }

  function handleCheck(): void {
    checkTask(task);
  }

  return (
    <li className={styles.item}>
      <input
        aria-checked={task.isConcluded}
        className={styles.checkbox}
        id={task.id}
        name={task.id}
        type="checkbox"
      />
      <span
        aria-checked={task.isConcluded}
        className={styles.checkbox}
        onClick={handleCheck}
      >
        {task.isConcluded && <Check size={12} />}
      </span>
      <label
        aria-checked={task.isConcluded}
        htmlFor={task.id}
        onDoubleClick={handleCheck}
      >
        {task.label}
      </label>
      <button>
        <Trash size={24} onClick={handleDelete} />
      </button>
    </li>
  );
}
