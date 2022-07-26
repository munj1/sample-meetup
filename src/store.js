//store.js
import { configureStore, createSlice } from "@reduxjs/toolkit";
import userEvent from "@testing-library/user-event";

let meetups = createSlice({
  name: "meetups",
  initialState: [],

  reducers: {
    setMeetups(state, fav) {
      let copy = new Set([...state, fav.payload]);
      return [...copy];
    },
  },
});

export let { setMeetups } = meetups.actions;

export default configureStore({
  reducer: {
    meetups: meetups.reducer, //등록완료
  },
});
