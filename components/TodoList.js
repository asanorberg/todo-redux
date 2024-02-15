//TODO LIST REDUX //
import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onRemoveClick, onDoneClick }) => {
  return (
    <div className="flex flex-row justify-center">
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDoneClick={onDoneClick}
            onRemoveClick={onRemoveClick}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
