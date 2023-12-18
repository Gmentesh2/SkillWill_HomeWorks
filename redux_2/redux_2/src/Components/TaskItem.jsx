import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useRequest from '../hooks/useRequest';
import { useLanguageContext } from "../Contexts/LanguageContext";
import { deleteTask } from '../store/todo/todo.thunks';
import { useDispatch } from 'react-redux';


const TaskItem = ({ task,checked, key, id, owner, deadline}) => {
  const {languages, language, setLanguage, georgian, english } = useLanguageContext();
  const url = `/api/v1/taskList/${id}`
  const {sendRequest} = useRequest({method: 'DELETE'})
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  function deleteTask() {
 dispatch(deleteTask(url))
 .then(action => { if (!action.payload)
 console.log('Error', action.error)}) 
 
  }

 

  return (
    <div key={key}>
      <p> {language === 'GE' ? georgian.taskItemNaming : english.taskItemNaming}  {task}</p>
      <p> {language === 'GE' ? georgian.owner: english.owner}: {owner}</p>
      <p> {language === 'GE' ? georgian.deadline: english.deadline}: {deadline}</p>
      <p> {language === 'GE' ? georgian.completed: english.completed}: {checked.toString()}</p>
      <Link to = {`/edit/${id}`}> {language === 'GE' ? georgian.editTask: english.editTask} </Link>
      <button onClick={() => deleteTask()}>{language === 'GE' ? georgian.delete: english.delete}</button>
    </div>
  );
};

export default TaskItem;