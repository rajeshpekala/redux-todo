import { useDispatch } from "react-redux";
import { removeTodo } from "../features/todoSlice";
import { useSelector } from "react-redux";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch()
  console.log(todos);
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id} className="bg-black m-2 p-2 text-white flex justify-between rounded-lg">
          {todo.text} <button className="bg-red-600 rounded-md p-1" onClick={()=>dispatch(removeTodo(todo.id))}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Todos;
