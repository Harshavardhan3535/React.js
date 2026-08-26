import { createSlice } from "@reduxjs/toolkit";

const PhysicsSlice = createSlice({
  name: 'Physics',
  initialState: {
    books: ["Physics book 1", "Physics book 2", "Physics book 3"],
    enrolledStudentsCount: 0
  },
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload)
    },
    emptyBooks: (state, action) => {
      state.books = []
    },
    incrementEnrolledStudents: (state, action) => {
      state.enrolledStudentsCount++
    }
  }
})

export const { addBook, emptyBooks, incrementEnrolledStudents } = PhysicsSlice.actions;
export default PhysicsSlice.reducer;