import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/UseFetch";
import useRequest from "../hooks/UseRequest";
import { useTaskContext } from "../TaskContext";
import { useLanguageContext } from "../Contexts/LanguageContext";

const TaskEditor = () => {
  const {languages, language, georgian, english} = useLanguageContext();
  const {id} = useParams();
  const [task, setTask] = useState('');
  const [checked, setChecked] = useState(false);
  const [owner, setOwner] = useState('');
  const [deadline, setDeadline] = useState('');

  const url = `/api/v1/taskList/${id}`;
  const { response, error, loading: fetchLoading, onFetch } = useFetch(url, 'GET');
  const { loading: requestLoading, sendRequest } = useRequest({url: url, method:  'PUT'});
  const navigate = useNavigate();


 
  useEffect(() => {
    if (response !== null) {
      setTask(response.task);
      setChecked(response.checked);
      setOwner(response.owner);
      setDeadline(response.deadline);
    }
  }, [response]);


  const onFormSubmit = () => {
    sendRequest({ task, checked, owner, deadline })
    .then(() => {navigate('/')})
    .catch(err => console.log(err))
    .finally(() =>  window.location.reload());
    
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <p>{language === 'GE' ? georgian.taskItemNaming: english.taskItemNaming}</p>
        <input type='text' value={task} onChange={(e) => setTask(e.target.value)} />
        <p>{language === 'GE' ? georgian.owner : english.owner}</p>
        <input type='text' value={owner} onChange={(e) => setOwner(e.target.value)} />
        <p>{language === 'GE' ? georgian.deadline : english.deadline}</p>
        <input type='text' value={deadline} onChange={(e) => setDeadline(e.target.value)} />
        <label>
          <input
            type='checkbox'
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
         {language === 'GE' ? georgian.markAsCompleted: english.markAsCompleted}
        </label>
        <button type='submit'>{language === 'GE' ? georgian.editTask: english.editTask}</button>
      </form>
    </div>
  );
};

export default TaskEditor;