import { useState } from "react";
import styles from "./App.module.css";

// components
import { Header } from './components/Header';
import { NewTask } from "./components/NewTask";
import { Task } from "./components/Task";
import { Tasks } from "./components/Tasks";

interface Task {
  id: string;
  title: string;
}

function App() {
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [numberOfCreatedTasks, setNumberOfCreatedTasks] = useState<number>(0);
  function addNewTask(task:Task){
    setTaskList(prevTasks => {
      return [...prevTasks, task]});
  }

  return (
    <div >
      <Header />
      <div className={styles.wrapper}>
        <NewTask 
          onAddNewTask={addNewTask} 
          onNumberOfTasks = {setNumberOfCreatedTasks}
        />
        <Tasks 
          taskList = {taskList} 
          numberOfTask = {numberOfCreatedTasks}
          setNumberOfTask = {setNumberOfCreatedTasks}
          setTaskList = {setTaskList}
        />
      </div>
    </div>
  )
}

export default App
