import React, { useState } from 'react';
import { TaskContainer, SpanEl, TaskTitle, Hr, Task, Button } from '../styled';
export default Backlog;

function Backlog({ backlogTasks, setBacklogTasks, setInProgressTasks, setDoneTasks }) {
  const [inputValue, setInputValue] = useState('');
  const [inputVisible, setInputVisible] = useState(false);
  const [taskInProgress, setTaskInProgress] = useState(false);
  const [hoverOnTask, setHoverOnTask] = useState(null);
  const addNewTask = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };

  const submitTask = (e) => {
    e.preventDefault();
    const task = {
      id: backlogTasks.length + 1,
      task: inputValue,
    };
  
    setBacklogTasks([...backlogTasks, task]);
    setInputValue('');
    setTaskInProgress(false);
    setInputVisible(false);
  };

  const removeTask = (id) => {
  
    setBacklogTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  const addToInProgress = (id) => {
    const targetTask = backlogTasks.find((task) => task.id === id);
    
    setInProgressTasks((tasks) => [...tasks, targetTask]);
    setBacklogTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  const addToDone = (id) => {
    const targetTask = backlogTasks.find((task) => task.id === id);
 
    setBacklogTasks((tasks) => tasks.filter((task) => task.id !== id));
    setDoneTasks((tasks) => [...tasks, targetTask]);
  };

  return (
    <TaskContainer>
      <div>
        <TaskTitle>Backlog <SpanEl>|</SpanEl>  {backlogTasks.length} </TaskTitle>
        <Hr color = {'#ff0000'}/>
        {backlogTasks.map((task, index) => (
          <Task index={index}  key={task.id} onMouseEnter = {() => setHoverOnTask(task.id)} onMouseLeave = {() => setHoverOnTask(null)}>
            <p>{task.task}</p>
            {hoverOnTask === task.id && 
            (<div>
            <button onClick={() => addToInProgress(task.id)}>Move to 'InProgress'</button>
            <button onClick={() => addToDone(task.id)}>Mark as done</button>
            </div>)}
          </Task>
        ))}
      </div>
      
      <div>
        {inputVisible ? (<form onSubmit={(e) => submitTask(e)}>
          <input
            type="text"
            placeholder="Add new task"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)} 
          />
          <button type="submit">Add to list</button>
        </form>) : (<Button onClick={() => {
          setInputVisible(true);
          setTaskInProgress(true);}}>+</Button>)}
        
      </div>
    </TaskContainer>
  );
}