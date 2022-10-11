import styles from "./Task.module.css";
import { Trash } from "phosphor-react";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

interface TaskProps {
  id: string;
  title: string;
  onAddNumberOfCompletedTask: Dispatch<SetStateAction<number>>;
  onDeleteTask: (taskId: string) => void;
}


export function Task({id ,title, onAddNumberOfCompletedTask, onDeleteTask}:TaskProps){
  const [check, setCheck] = useState<boolean>(false);

  function handleCompletedTask(event:ChangeEvent<HTMLInputElement>){
    if (!check){
      onAddNumberOfCompletedTask(prevNumber => prevNumber + 1);
      setCheck (true);
    }else {
      onAddNumberOfCompletedTask(prev => prev - 1);
      setCheck(false);
    }
  }

  function handleDeleteTask(){
    onDeleteTask(id);
    if(check){
      onAddNumberOfCompletedTask(prev => prev -1);
    }
  }


  return(
    <div className={styles.task}>
      <div className={styles.labelContainer}>
        <input 
          id={id} 
          type="checkbox"
          checked = {check}
          onChange={handleCompletedTask}/>
        <label htmlFor={id} className={styles.labelTask}>
          <span>{title}</span>
        </label>
      </div>
      <button className={styles.deleteButton} onClick={handleDeleteTask}><Trash size={24}/></button>
    </div>
  );
}

