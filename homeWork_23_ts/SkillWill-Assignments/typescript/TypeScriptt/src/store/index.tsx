import { combineReducers, configureStore  } from "@reduxjs/toolkit";
import darkModeReducer from "./darkMode/darkMode.slice";
import todoReducer, { ErrorPayload, SpecifiedTask, Tasks } from './todo/todo.slice';



export interface TodoState {
  tasks: Tasks;
  putloading: boolean;
  deleteloading: boolean;
  postloading: boolean;
  getloading: boolean;
  error: ErrorPayload | null;
  specifiedTask: SpecifiedTask;
  specifiedloading: boolean;
  lastPostedTask: SpecifiedTask;
}


export interface DarkModeState {
  mode: string;
}


export interface RootState {
  todo: TodoState;
  darkMode: DarkModeState;
}

const rootReducer = combineReducers({
  todo: todoReducer,
  darkMode: darkModeReducer
})

export const store = configureStore({
  reducer: rootReducer,
  devTools: true
})


