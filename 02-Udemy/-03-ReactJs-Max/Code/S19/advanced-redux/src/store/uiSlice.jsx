import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { isOpen: false, notification: null },
  reducers: {
    toggle(state) {
      state.isOpen = !state.isOpen;
    },
    setNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        msg: action.payload.msg,
        title: action.payload.title,
      };
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
