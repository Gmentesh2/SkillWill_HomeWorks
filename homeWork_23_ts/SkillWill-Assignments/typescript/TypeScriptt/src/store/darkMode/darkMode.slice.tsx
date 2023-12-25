import { createSlice } from "@reduxjs/toolkit"


export const initialState: DarkModeState = {
  mode: 'light'
}

export interface DarkModeState {
  mode: string
}

const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    toggleMode:   (state) => {
      state.mode = state.mode === 'dark' ? 'light' : 'dark';
    }
  }
});

export const { toggleMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;