import React, { useEffect, useState } from 'react';
import TaskItem from './TaskItem';
import Tasks from './Tasks.jsx';

function App() {
  const API_KEY = 'es1omOSfdoxgkjedibJq1fmoNGco4k5a8gIwbAvmK8TGToQc6Q';
  const [taskList, setTaskList] = useState([]);

  const onFormSubmit = (task, checked) => {
    fetch('/api/v1/taskList', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify([{ task, checked }]),
    })
      .then((res) => {
        if (!res.ok) throw new Error('failed to create response');
        return res.json();
      })
      .then((data) =>
        setTaskList((prev) => [
          ...prev,
          { task: data.items[0].task, checked: data.items[0].checked, id: data.items[0]._uuid },
        ])
      )
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetch('/api/v1/taskList', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_KEY}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to get response');
        }
        return res.json();
      })
      .then((data) => {
        // Log the data to check if it's being received correctly
        console.log(data);
        
        setTaskList(data.items.map(task => {
        
          return(
          { task: task.task, checked: task.checked, id: task._uuid })}
        ))
        })
      
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <Tasks onFormSubmit={onFormSubmit} />
      {taskList.map((task) => (
        <TaskItem task={task.task} prevStatus={task.checked} key={task.id} />
      ))}
    </div>
  );
}

export default App;