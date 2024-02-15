import { FaPlus } from "react-icons/fa";
// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTitle } from "@/redux/todoSlice";

function TodoInput() {
  const title = useSelector((state) => state.todos.title);

  const dispatch = useDispatch;

  const handleClickAdd = () => {
    onAddClick(title);
    setTitle("");
  };

  const handleInputChange = (e) => {
    dispatch(setTitle(e.target.value));
  };

  return (
    <div className="inputContainer space-x-4 flex items-center w-full">
      <input
        className="py-4 pl-4 placeholder:text-ph-blue"
        type="text"
        placeholder="New todo"
        value={title}
        onChange={handleInputChange}
      />
      <button
        onClick={handleClickAdd}
        className="add-btn flex-col items-center justify-center rounded-full px-3 py-1 font-bold text-4xl"
      >
        <FaPlus className="add-icon" />
      </button>
    </div>
  );
}

export default TodoInput;
