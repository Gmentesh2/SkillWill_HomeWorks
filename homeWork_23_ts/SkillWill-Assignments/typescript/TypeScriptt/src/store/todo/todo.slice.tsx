import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getTasks, putTask, deleteTask, postTask, getSpecifiedTask } from "./todo.thunks";


export interface Tasks {
    items: 
        {
            _created: number,
            _data_type: string
            _is_deleted: false,
            _modified: number,
            _self_link: string,
            _user: string,
            _uuid: string
            completed: boolean,
            title: string
        }[]
    
}

export interface SpecifiedTask {
  _created: number;
  _data_type: string;
  _is_deleted: boolean;
  _modified: number;
  _self_link: string;
  _user: string;
  _uuid: string;
  completed: boolean;
  title: string;
  task: string,
  owner: string,
  checked: boolean,
  deadline: string
}


export interface InitialState  {
  tasks: Tasks,
  putloading: boolean,
  deleteloading: boolean,
  postloading: boolean,
  getloading: boolean,
  error: ErrorPayload | null,
  specifiedTask: SpecifiedTask,
  specifiedloading: boolean,
  lastPostedTask: SpecifiedTask,
}

export interface ErrorPayload {
  message: string;
}


const initialState: InitialState = {
  tasks: {
    items: []
  },
  putloading: false,
  deleteloading: false,
  postloading: false,
  getloading: false,
  error: null,
  specifiedTask: {
    _created: 0,
    _data_type: '',
    _is_deleted: false,
    _modified: 0,
    _self_link: '',
    _user: '',
    _uuid: '',
    completed: false,
    title: '',
    task: '',
    owner: '',
    checked: false,
    deadline: ''
  },
  specifiedloading: false,
  lastPostedTask: {
    _created: 0,
    _data_type: '',
    _is_deleted: false,
    _modified: 0,
    _self_link: '',
    _user: '',
    _uuid: '',
    completed: false,
    title: '',
    task: '',
    owner: '',
    checked: false,
    deadline: ''
  },

}
const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
  updateTasks:  (state, action: PayloadAction<Tasks>) => {
    state.tasks = action.payload
  }
  },
  extraReducers: {
    [getTasks.pending.type]:(state) => {
      state.getloading = true
    },
    [getTasks.fulfilled.type]:(state, action: PayloadAction<Tasks>) => {
      state.getloading = false;
      state.error = null;
      state.tasks = action.payload
    },
    [getTasks.rejected.type]:(state, action: PayloadAction<ErrorPayload>) => {
      state.getloading = false;
      state.error = action.payload
    },

    [putTask.pending.type]:(state) => {
      state.putloading = true
    },
    [putTask.fulfilled.type]:(state, action: PayloadAction<SpecifiedTask>) => {
      state.putloading = false;
      state.error = null
      
    },
    [putTask.rejected.type]:(state, action: PayloadAction<ErrorPayload>) => {
      state.putloading = false;
      state.error = action.payload
    },

    [postTask.pending.type]:(state) => {
      state.postloading = true
    },
    [postTask.fulfilled.type]:(state, action:PayloadAction<SpecifiedTask>) => {
      state.postloading = false;
      state.error = null
      state.lastPostedTask = action.payload
      
    },
    [postTask.rejected.type]:(state, action: PayloadAction<ErrorPayload>) => {
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
    [deleteTask.rejected.type]:(state, action: PayloadAction<ErrorPayload>) => {
      state.deleteloading = false;
      state.error = action.payload
    },

    [getSpecifiedTask.pending.type]:(state) => {
      state.specifiedloading = true
      
    },
    [getSpecifiedTask.fulfilled.type]:(state, action: PayloadAction<SpecifiedTask>) => {
      state.specifiedloading = false;
      state.error = null
      state.specifiedTask = action.payload
    },
    [getSpecifiedTask.rejected.type]:(state, action: PayloadAction<ErrorPayload>) => {
      state.specifiedloading = false;
      state.error = action.payload
      
    },

  
  },

  

  

});

export default todoSlice.reducer