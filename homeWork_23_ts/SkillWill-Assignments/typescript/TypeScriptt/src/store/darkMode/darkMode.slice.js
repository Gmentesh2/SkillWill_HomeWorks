import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  mode: 'light'
}

const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    toggleMode: (state) => {
      state.mode = state.mode === 'dark' ? 'light' : 'dark';
    }
  }
});

export const { toggleMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;