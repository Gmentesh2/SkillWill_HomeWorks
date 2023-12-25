import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguageContext } from "../Contexts/LanguageContext";
import { deleteTask } from '../store/todo/todo.thunks';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';

interface TaskItemProps {
  task: string,
  checked: boolean,
  owner: string,
  deadline: string,
  id: string,
  key: string
}

const TaskItem: React.FC<TaskItemProps> = ({ task,checked, key, id, owner, deadline}) => {
  const {languages, language, setLanguage, georgian, english } = useLanguageContext();
  const url = `/api/v1/taskList/${id}`
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {mode} = useSelector((state: RootState) => state.darkMode)
  function deleteItem() {
 dispatch(deleteTask(url))
 .then(action => {
 window.location.reload()}) 
 
  }

 

  return (
    <div key={key}  className={mode === 'light' ? 'light-mode' : 'dark-mode'}>
      <p> {language === 'GE' ? georgian.taskItemNaming : english.taskItemNaming}  {task}</p>
      <p> {language === 'GE' ? georgian.owner: english.owner}: {owner}</p>
      <p> {language === 'GE' ? georgian.deadline: english.deadline}: {deadline}</p>
      <p> {language === 'GE' ? georgian.completed: english.completed}: {checked.toString()}</p>
      <Link to = { `/edit/${id}`}> {language === 'GE' ? georgian.editTask: english.editTask} </Link>
      <button onClick={() => deleteItem()}>{language === 'GE' ? georgian.delete: english.delete}</button>
    </div>
  );
};

export default TaskItem;