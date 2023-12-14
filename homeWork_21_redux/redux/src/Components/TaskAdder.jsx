import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addTodoAction } from "../store/todo/todo.actions";


const TaskAdder = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const onSubmit = ((e) => {
    e.preventDefault()
    dispatch(addTodoAction(inputValue))
    setInputValue('')
  });
  
    
    return (
      <div>
        <form onSubmit = {onSubmit}>
        <input value={inputValue}  onChange={(e) => setInputValue(e.target.value)} ></input>
        <button>add Task</button>
        </form>
      </div>
    )
};

export default TaskAdder;