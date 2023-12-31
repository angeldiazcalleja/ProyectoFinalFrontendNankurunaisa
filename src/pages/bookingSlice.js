import { createSlice } from "@reduxjs/toolkit";

export const bookingSlice = createSlice({
  name: "bookings",
  initialState: {
    bookings: [],
  },
  reducers: {
    setBookings: (state, action) => {
      state.bookings = action.payload;
    },
    cleanBookings: (state) => {
      state.bookings = [];
    },
  },
});

export const { setBookings, cleanBookings } = bookingSlice.actions;
export const bookingData = (state) => state.booking;
export default bookingSlice.reducer;