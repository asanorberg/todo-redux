import TodoInput from "@/components/TodoInput";
import TodoList from "@/components/TodoList";
import { useSelector } from "react-redux";

function App() {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <div className="main-container shadow-2xl rounded-2xl">
      <h1 className="text-black text-4xl font-bold mb-8">My Todos</h1>
      <div className="space-y-6">
        <TodoInput />
        <TodoList todos={todos} />
      </div>
    </div>
  );
}

export default App;
