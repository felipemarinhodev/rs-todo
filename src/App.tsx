import styles from "./App.module.css";
import "./global.css";

import logo from "./assets/Logo.svg";

import { PlusCircle } from "phosphor-react";
import { Button } from "./components/Button";
import { Counter } from "./components/Counter";
import { EmptyList } from "./components/EmptyList";
import { Input } from "./components/Input";
import { List } from "./components/List";

import { ChangeEvent, FormEvent, useMemo, useState } from "react";
import { Task } from "./types/types";

const data: Task[] = [
  {
    id: crypto.randomUUID(),
    label: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    isConcluded: true
  }
];

function App() {
  const [tasks, setTasks] = useState<Task[]>(data);
  const [newTask, setNewTask] = useState<string>("");

  const counterDone = useMemo(() => {
    const tasksConclued = tasks.filter(task => task.isConcluded);
    return tasksConclued.length;
  }, [tasks]);

  function handleCreateTask(event: ChangeEvent<HTMLInputElement>): void {
    setNewTask(event.target.value);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const newData = {
      id: crypto.randomUUID(),
      label: newTask,
      isConcluded: false
    }
    setTasks(oldValuesState => [...oldValuesState, newData]);
    setNewTask("");
  }

  return (
    <div>
      <header className={styles.header}>
        <img
          src={logo}
          alt="logo todo"
        />
      </header>
      <div className={styles.wrapper}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <Input
            onChange={handleCreateTask}
            placeholder="Adicione uma nova tarefa"
            value={newTask}
          />
          <Button type="submit">
            Criar
            <PlusCircle size={24} />
          </Button>
        </form>

        <div className={styles.tasks}>
          <div className={styles.info}>
            <Counter total={tasks.length}>
              Tarefas criadas
            </Counter>
            <Counter color="purple" total={tasks.length} quantity={counterDone}>
              Concluídas
            </Counter>
          </div>
          {
            !tasks || tasks.length === 0
              ? (<EmptyList />)
              : (<List tasks={tasks} handleTasks={setTasks} />)
          }
        </div>
      </div>
    </div>
  )
}

export default App
