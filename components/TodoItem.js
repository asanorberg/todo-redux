import React from "react";
import { FaCircleCheck, FaCircleXmark } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { removeTodo, toggleComplete } from "@/redux/todoSlice";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  function onDoneClick(id) {
    dispatch(toggleComplete({ id }));
  }

  function onRemoveClick(id) {
    dispatch(removeTodo({ id }));
  }

  return (
    <div key={todo.id} className={todo.done ? "todo-row done" : "todo-row"}>
      <li className="m-2">
        <div className="text-lg">{todo.title}</div>
      </li>
      <div className="space-x-4 m-2 whitespace-nowrap">
        <button onClick={() => onDoneClick(todo.id)}>
          <FaCircleCheck className="icon text-green-600" />
        </button>
        <button onClick={() => onRemoveClick(todo.id)}>
          {" "}
          <FaCircleXmark className="icon text-red-600" />{" "}
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
