import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useRequest from '../hooks/useRequest';


const TaskItem = ({ task,checked, key, id, owner, deadline}) => {
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
      <h3> Task: {task}</h3>
      <h4> Owner: {owner}</h4>
      <h4> Deadline: {deadline}</h4>
      <p> completed: {checked.toString()}</p>
      <Link to = {`/edit/${id}`}> Edit Task </Link>
      <button onClick={() => deleteTask()}>Delete</button>
    </div>
  );
};

export default TaskItem;