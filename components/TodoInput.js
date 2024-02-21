import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "@/redux/todoSlice";

function TodoInput() {
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();

  const handleClickAdd = () => {
    dispatch(addTodo(title));
    setTitle("");
  };

  const handleInputChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div className="inputContainer space-x-4 flex items-center ">
      <input
        className="py-4 pl-4 placeholder:text-grey"
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
