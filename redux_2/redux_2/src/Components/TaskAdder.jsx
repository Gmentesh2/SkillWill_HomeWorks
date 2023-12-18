import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTaskContext } from '../TaskContext';
import useRequest from '../hooks/useRequest';
import { useLanguageContext } from "../Contexts/LanguageContext";
import { postTask } from '../store/todo/todo.thunks';
import { useDispatch, useSelector } from 'react-redux';


const TaskAdder = () => {
  const {language, georgian, english } = useLanguageContext();
  const [checked, setChecked] = useState(false);
  const [task, setTask] = useState('');
  const [owner, setOwner] = useState('');
  const [deadline, setDeadline] = useState('');
  const navigate = useNavigate();
  const url = '/api/v1/taskList';
  const dispatch = useDispatch();    
  const {error, postloading} = useSelector((state) => state.todo)

  const onFormSubmit = () => {

    dispatch(postTask({task,owner,checked,deadline,url}))
    .finally(() => {
      navigate('/')
      })

  };


  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit();
  };

  if(error) return <div>{error}</div>
  if(postloading) return <div>loading...</div>
  return (
    <div>
      <Link to = {'/'}>{language === 'GE' ? georgian.backToTasks: english.backToTasks}</Link>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          placeholder= {language === 'GE' ? georgian.enterTask : english.enterTask}
          onChange={(e) => setTask(e.target.value)}
        />

        <input
          type='text'
          placeholder={language === 'GE' ? georgian.enterOwner : english.enterOwner}
          onChange={(e) => setOwner(e.target.value)}
        />

        <input
          type='text'
          placeholder={language === 'GE' ? georgian.enterDeadline : english.enterDeadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
       
          <input
            type='checkbox'
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
          {language === 'GE' ? georgian.markAsCompleted : english.markAsCompleted}
        
        <button type='submit'>{language === 'GE' ? georgian.addNewTask : english.addNewTask}</button>
      </form>
    </div>
  );
};

export default TaskAdder;