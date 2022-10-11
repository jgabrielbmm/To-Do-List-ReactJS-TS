import { v4 as uuidv4 } from 'uuid';
import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useState } from 'react';
import styles from "./NewTask.module.css";
import plus from "../assets/plus.svg";

interface Task {
  id: string;
  title: string;
}

interface NewTaskProps {
  onAddNewTask: (task:Task) => void;
  onNumberOfTasks: Dispatch<SetStateAction<number>>;
}
export function NewTask({onAddNewTask, onNumberOfTasks}:NewTaskProps){

  const [title, setTitle] = useState("");

  function handleTaskTitle (event: ChangeEvent<HTMLInputElement>){
    setTitle(event.target.value);
  }

  function handleNewTask (event: FormEvent<HTMLFormElement>){
    event.preventDefault();
    const uuid: string= uuidv4();
    const newTask: Task = {
      id: uuid,
      title: title,
    }
    onAddNewTask(newTask);
    onNumberOfTasks(prevNumber => {
      return prevNumber + 1;
    })
    setTitle("");
  }

  return(
    <form onSubmit={handleNewTask} className={styles.form}>
      <input 
        type="text" 
        required
        className={styles.newTaskInput}
        value={title}
        onChange={handleTaskTitle}
        placeholder="Adicione uma nova tarefa" 
      />
      <button 
        type="submit"
        className={styles.newTaskButton} 
        >
          <span>Criar</span> 
          <img className={styles.plus} src={plus}/>
      </button>
    </form>
  )
}