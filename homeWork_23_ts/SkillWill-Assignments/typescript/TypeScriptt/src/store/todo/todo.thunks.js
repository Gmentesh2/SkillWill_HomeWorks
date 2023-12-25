import { createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = `PWqx8-3636z6m8y6laul3X7MuuElun9o68_MJHKdOe1eO4ahrQ`
const urlGet = `/api/v1/taskList`;
export const getTasks = createAsyncThunk(
  '/todo/GET',
  async(_, ThunkAPI) => {
    
    try {
      const res = await fetch(urlGet, {
        headers: {
          'Content-Type': "application/json",
          Authorization: `Bearer ${API_KEY}`
        }
      })
      const data = await res.json()
      if(data) return ThunkAPI.fulfillWithValue(data.items)
    } catch (error) {
      return ThunkAPI.rejectWithValue('Unable to get data')
    }
  }
)


export const getSpecifiedTask = createAsyncThunk(
 
  async(specUrl, ThunkAPI) => {
    try {
      const res = await fetch(specUrl, {
        headers: {
          'Content-Type': "application/json",
          Authorization: `Bearer ${API_KEY}`
        }
      })
      const data = await res.json()
      if(data) return ThunkAPI.fulfillWithValue(data)
    } catch (error) {
      return ThunkAPI.rejectWithValue('Unable to get specified task')
    }
  }
)



export const postTask = createAsyncThunk(
  '/todo/POST',
  async(taskData, ThunkAPI) => {
    const { task, owner, checked, deadline, url } = taskData;
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': "application/json",
          Authorization: `Bearer ${API_KEY}`
        },
        body: JSON.stringify([{task, owner, checked, deadline}])
      })

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json()
      if(data) return ThunkAPI.fulfillWithValue(data)
    } catch (error) {
      return ThunkAPI.rejectWithValue(error.message)
    }
  }
)


export const putTask = createAsyncThunk(
  '/todo/PUT',
  async(taskData, ThunkAPI) => {
    const { task, owner, checked, deadline, url } = taskData;
    try {
      const res = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': "application/json",
          Authorization: `Bearer ${API_KEY}`
        },
        body: JSON.stringify(taskData)
      })
      const data = await res.json()
      if(data) return ThunkAPI.fulfillWithValue(data.items)
    } catch (error) {
      return ThunkAPI.rejectWithValue('Unable to put data')
    }
  }
)


export const deleteTask = createAsyncThunk(
  '/todo/DELETE',
  async(url, ThunkAPI) => {
    try {
      const res = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': "application/json",
          Authorization: `Bearer ${API_KEY}`
        }
      })
      const data = await res.json()
      if(data) return ThunkAPI.fulfillWithValue(data.items)
    } catch (error) {
      return ThunkAPI.rejectWithValue('Unable to delete data')
    }
  }
)