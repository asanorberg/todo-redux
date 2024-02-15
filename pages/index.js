import TodoInput from "@/components/TodoInput";
import TodoList from "@/components/TodoList";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo, toggleComplete } from "@/redux/todoSlice";

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleClickAdd = () => {
    dispatch(addTodo(title));
    setTitle("");
  };

  const handleClickRemove = (id) => {
    dispatch(removeTodo(id));
  };

  const handleClickDone = (id) => {
    dispatch(toggleComplete(id));
  };

  return (
    <div className="main-container shadow-2xl rounded-2xl flex-col">
      <h1 className="text-white text-4xl font-bold mb-8">My Todos</h1>
      <div className="space-y-6 ">
        <TodoInput onAddClick={handleClickAdd} />
        <TodoList
          todos={todos}
          onRemoveClick={handleClickRemove}
          onDoneClick={handleClickDone}
        />
      </div>
    </div>
  );
}

export default App;
