import styles from "./Tasks.module.css";
import clipboard from "../assets/Clipboard.svg";
import { Task } from "./Task";
import { Dispatch, SetStateAction, useState } from "react";

interface Task {
  id: string;
  title: string;
}

interface TasksProps {
  taskList: Task[];
  numberOfTask: number;
  setNumberOfTask: Dispatch<SetStateAction<number>>;
  setTaskList: Dispatch<SetStateAction<Task[]>>
}

export function Tasks({taskList, numberOfTask, setNumberOfTask,setTaskList}: TasksProps){
  const [numberOfCompletedTask, setNumberOfCompletedTask] = useState<number>(0);

  function deleteTask(taskId:string){
    const newList = taskList.filter(task => {
      return task.id !== taskId;
    });

    setTaskList(newList);

    setNumberOfTask(prevNumber => {
      return prevNumber - 1;
    })

  }

  return (
    <div className={styles.tasks}>
      <header className={styles.headerContainer}>
      <div className={styles.createdTasks}>
        <p>Tarefas criadas</p>
        <div className={styles.counter}>
          <span>{numberOfTask}</span>
        </div>
      </div>
      <div className={styles.doneTasks}>
        <p>Concluídas</p>
        {numberOfTask === 0 && (
          <div className={styles.counter}>
          <span>0</span>
        </div>
        )}
        {numberOfTask > 0 && (
          <div className={styles.counterCompleted}>
          <span>{numberOfCompletedTask} de {numberOfTask}</span>
        </div>
        )}
      </div>
    </header>
    <div>
      {taskList.length === 0 && (
        <div className={styles.empty}>
        <div className={styles.noTaskMessage}>
          <img src={clipboard} alt="clip board" />
          <div className={styles.textContainer}>
            <p>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </div>
      </div>
      )}
    </div>
    {taskList.length > 0 && (
      taskList.map(task => {
        return (
          <Task 
            key={task.id} 
            id={task.id} 
            title={task.title} 
            onAddNumberOfCompletedTask = {setNumberOfCompletedTask}
            onDeleteTask = {deleteTask}
          />
        )
      })
    )}

  </div>

  )
}