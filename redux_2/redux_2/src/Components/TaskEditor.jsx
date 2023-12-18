import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import useRequest from "../hooks/useRequest";
import { useLanguageContext } from "../Contexts/LanguageContext";
import { getSpecifiedTask, getTasks, putTask,  } from "../store/todo/todo.thunks";
import { useDispatch, useSelector } from "react-redux";

const TaskEditor = () => {
  const {languages, language, georgian, english} = useLanguageContext();
  const {id} = useParams();
  const [task, setTask] = useState('');
  const [checked, setChecked] = useState(false);
  const [owner, setOwner] = useState('');
  const [deadline, setDeadline] = useState('');
  const dispatch = useDispatch();

  const url = `/api/v1/taskList/${id}`;
  const { specifiedloading, specifiedTask, putloading, error} = useSelector((state) => state.todo)
  const navigate = useNavigate();


 
  useEffect(() => {
    dispatch(getSpecifiedTask(url));
   
    if (specifiedTask !== null) {
      setTask(specifiedTask.task);
      setChecked(specifiedTask.checked);
      setOwner(specifiedTask.owner);
      setDeadline(specifiedTask.deadline);
    }
  }, [specifiedTask]);


  const onFormSubmit = () => {
    dispatch(putTask({ task, checked, owner, deadline, url }))
  .then(action => {
    if (action.payload) {
      navigate('/');
    } else {
      console.log("Error:", action.error);
    }
  })
  .catch(err => console.log(err))
  
    
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