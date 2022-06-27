import { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "./src/store/apis/todosApi";

export const TodoApp = () => {
  const [todoId, setTodoId] = useState(1);
  // const { data: todos = [], isLoading } = useGetTodosQuery();
  const { data: todo, isLoading } = useGetTodoQuery(todoId);

  const nextTodo = () => {
    setTodoId(todoId + 1);
  };

  const previusTodo = () => {
    if (todoId === 1) return;
    setTodoId(todoId - 1);
  };

  return (
    <>
      <h1>ToDo App</h1>
      <hr />
      <h4>Is loading: {isLoading ? "True" : "False"}</h4>

      <pre>{JSON.stringify(todo)}</pre>

      <button disabled={isLoading} onClick={previusTodo}>
        Previus ToDo
      </button>
      <button disabled={isLoading} onClick={nextTodo}>
        Next ToDo
      </button>

      {/* <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.completed ? "DONE " : "Pending "}</strong>
            {todo.title}
          </li>
        ))}
      </ul> */}
    </>
  );
};
