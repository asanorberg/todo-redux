//TODO LIST REDUX //
import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos }) => {
  return (
    <div className="">
      <ul className="pl-0">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
