import { createSlice } from "@reduxjs/toolkit";
import { getTasks, putTask, deleteTask, postTask, getSpecifiedTask } from "./todo.thunks";


const initialState = {
  tasks: [],
  putloading: false,
  deleteloading: false,
  postloading: false,
  getloading: false,
  error: null,
  specifiedTask: '',
  specifiedloading: false,
  lastPostedTask: ''

}
const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
  updateTasks:  (state, action) => {
    state.tasks = action.payload
  }
  },
  extraReducers: {
    [getTasks.pending.type]:(state) => {
      state.getloading = true
    },
    [getTasks.fulfilled.type]:(state, action) => {
      state.getloading = false;
      state.error = null;
      state.tasks = action.payload
    },
    [getTasks.rejected.type]:(state, action) => {
      state.getloading = false;
      state.error = action.payload
    },

    [putTask.pending.type]:(state) => {
      state.putloading = true
    },
    [putTask.fulfilled.type]:(state, action) => {
      state.putloading = false;
      state.error = null
      
    },
    [putTask.rejected.type]:(state, action) => {
      state.putloading = false;
      state.error = action.payload
    },

    [postTask.pending.type]:(state) => {
      state.postloading = true
    },
    [postTask.fulfilled.type]:(state, action) => {
      state.postloading = false;
      state.error = null
      state.lastPostedTask = action.payload
      
    },
    [postTask.rejected.type]:(state, action) => {
      state.postloading = false;
      state.error = action.payload
    },

    [deleteTask.pending.type]:(state) => {
      state.deleteloading = true
    },
    [deleteTask.fulfilled.type]:(state, action) => {
      state.deleteloading = false;
      state.error = null
    },
    [deleteTask.rejected.type]:(state, action) => {
      state.deleteloading = false;
      state.error = action.payload
    },

    [getSpecifiedTask.pending.type]:(state) => {
      state.specifiedloading = true
      
    },
    [getSpecifiedTask.fulfilled.type]:(state, action) => {
      state.specifiedloading = false;
      state.error = null
      state.specifiedTask = action.payload
    },
    [getSpecifiedTask.rejected.type]:(state, action) => {
      state.specifiedloading = false;
      state.error = action.payload
      
    },

  
  },

  

  

});

export default todoSlice.reducer