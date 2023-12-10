import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useRequest from '../hooks/UseRequest';
import { useLanguageContext } from "../Contexts/LanguageContext";


const TaskItem = ({ task,checked, key, id, owner, deadline}) => {
  const {languages, language, setLanguage, georgian, english } = useLanguageContext();
  
  const url = `/api/v1/taskList/${id}`
  const {sendRequest} = useRequest({method: 'DELETE'})
  const navigate = useNavigate();
  
  function deleteTask() {
 sendRequest(null, url)
 .catch(err => console.log(err))
 .finally(() =>  window.location.reload());
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