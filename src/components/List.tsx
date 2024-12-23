import styles from "./List.module.css";
import { Task as TaskType } from "../types/types";
import { Task } from "./Task";

export type ListProps = {
  tasks: TaskType[];
  handleTasks: (tasks: TaskType[]) => void;
}

export function List({ handleTasks, tasks }: ListProps) {

  function handleRemoveTask(task: TaskType): void {
    const newTasks = tasks.filter(taskState => taskState.id !== task.id);
    handleTasks(newTasks);
  }

  function handleMarkTaskAsConcludedOrUnconcluded(task: TaskType): void {
    const newTasks = tasks.map(taskState => {
      if (taskState.id === task.id) {
        taskState.isConcluded = !taskState.isConcluded;
      }
      return taskState;
    });
    handleTasks(newTasks);
  }

  return (
    <ul className={styles.list}>
      {tasks.map(task =>
      (
        <Task
          key={task.id}
          removeTask={handleRemoveTask}
          checkTask={handleMarkTaskAsConcludedOrUnconcluded}
          task={task}
        />
      )
      )}
    </ul>
  );
}

//
