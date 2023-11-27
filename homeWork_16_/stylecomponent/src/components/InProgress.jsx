import React from "react";
import { useState } from "react";
import { TaskContainer, SpanEl, TaskTitle, Hr, Task, Button } from '../styled';

function InProgress({InProgressTasks, setBacklogTasks,setInProgressTasks,setDoneTasks}) {

  const [inputValue, setInputValue]    = useState(''); 
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
      id: InProgressTasks.length + 1,
      task: inputValue,
    };
    setInProgressTasks((tasks) => 
      [...tasks, task]
    );
    setInputValue('');
    setTaskInProgress(false);
    setInputVisible(false);
  };

 const removeTask = (id) => {
    setInProgressTasks((tasks) => 
    tasks.filter((task) => task.id !== id),
    );
  };

  const backToBackLog = (id) => {
    const targetTask = InProgressTasks.find((task) => task.id === id);
    setBacklogTasks((tasks) => 
       [...tasks, targetTask]);
     setInProgressTasks((doneTasks) => doneTasks.filter((task) => task.id !== id));
  };

  const addToDone = (id) => {
    const targetTask = InProgressTasks.find((task) => task.id === id);
    setInProgressTasks((tasks) => 
    tasks.filter((task) => task.id !== id));
    setDoneTasks((doneTasks) => [...doneTasks, targetTask]);
  };

    return (
      <TaskContainer>
      <div>
        <TaskTitle>In Progress <SpanEl>|</SpanEl> {InProgressTasks.length} </TaskTitle>
        <Hr color = {'#0000ff'}/>
        {InProgressTasks.map((task, index) => (
          <Task index={index} key={task.id} onMouseEnter = {() => setHoverOnTask(task.id)} onMouseLeave = {() => setHoverOnTask(null)}>
            <p>{task.task}</p>
            {hoverOnTask === task.id && 
            (<div>
              <button onClick={() => addToDone(task.id)}>Move to done</button>
            <button onClick={() => backToBackLog(task.id)}>Move to 'Backlog'</button>
            <button onClick={() => removeTask(task.id)}>Remove Task</button>
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

export default InProgress;