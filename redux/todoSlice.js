import { createSlice } from "@reduxjs/toolkit";

//   { id: 1, title: "Pay bills", done: false },
//   { id: 2, title: "Wash car", done: false },
//   { id: 3, title: "Do laundry", done: false },
//   { id: 4, title: "Study", done: false },

export const initialState = {
  todos: [
    { id: 1, title: "Pay bills", done: false },
    { id: 2, title: "Wash car", done: false },
    { id: 3, title: "Do laundry", done: false },
    { id: 4, title: "Study", done: false },
  ],
};

let count = 5;

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: count++,
        title: action.payload,
        done: false,
      });
      state.title = "";
    },
    toggleComplete: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.done = !todo.done;
      }
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    setTitle: (state, action) => {
      state.title = action.payload;
    },
  },
});

export const { addTodo, removeTodo, toggleComplete, setTitle } =
  todoSlice.actions;

export default todoSlice.reducer;

// addTodo
// completeTodo
// removeTodo
