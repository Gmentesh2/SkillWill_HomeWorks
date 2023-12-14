import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteDoneAction, markDoneAction, backToBacklog } from "../store/todo/todo.actions";

const DoneTasks = () => {
  {
    const {doneList, status} = useSelector((state) => state.todo)
    const dispatch = useDispatch();
    
    return (
    <div>
    <h2>Tasks</h2>
    {doneList.map((item) => 
    <div key = {item}>
    <p>{item}</p>
    <p>status: {status}</p>
    <button onClick={() => dispatch(deleteDoneAction(item))}>delete</button>
    <button onClick={() => dispatch(backToBacklog(item))}>Mark as pending</button>
    </div>
    )}
    </div>
    );
    }
};

export default DoneTasks;