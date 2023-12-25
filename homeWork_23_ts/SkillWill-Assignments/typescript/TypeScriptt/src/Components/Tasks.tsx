import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import TaskItem from "./TaskItem";
import { useLanguageContext } from "../Contexts/LanguageContext";
import { getTasks } from "../store/todo/todo.thunks";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";


const Tasks: React.FC = () => {
  const {languages, language, setLanguage, georgian, english } = useLanguageContext();
  const location = useLocation();
  const dispatch = useDispatch();
  const {mode} = useSelector((state: RootState) => state.darkMode)
  const url = `/api/v1/taskList`;
  const { tasks, getloading, error  } = useSelector((state) => state.todo)
 
  
  useEffect(() => {
    dispatch(getTasks())
    // if (tasks !== null) {
    //   const newTaskList = tasks?.map((task) => ({
    //     task: task.task,
    //     checked: task.checked,
    //     owner: task.owner,
    //     deadline: task.deadline,
    //     id: task._uuid,
    //   }));
      // const isDifferent = newTaskList.some((newTask) => {
      //   return !tasks.some((currentTask) => currentTask.id === newTask.id);
      // });
      // if (isDifferent) {
      //   tasks = newTaskList;
      // }
    // }
  }, [dispatch]);

 
  if (getloading) return <p>{language === 'GE' ? georgian.loading : english.loading}</p>;
  if (error) return <p>{language === 'GE' ? georgian.error : english.error}</p>;

  console.log(tasks)
  return (
    <div  className={mode === 'light' ? 'light-mode' : 'dark-mode'}>
       {location.pathname === '/' && ( 
        <Link to="/add">{language === 'GE' ? georgian.addNewTask : english.addNewTask}</Link>
      )}
      {tasks.map((task) => (
        <TaskItem
          task={task.task}
          checked={task.checked}
          owner = {task.owner}
          deadline = {task.deadline}
          id={task._uuid}
          key={task._uuid}

        />
      ))}
    </div>
  );
};

export default Tasks;

