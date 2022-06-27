import { useGetTodosQuery } from "./src/store/apis/todosApi";

export const TodoApp = () => {
  const { data: todos = [], isLoading } = useGetTodosQuery();

  return (
    <>
      <h1>ToDo App</h1>
      <hr />
      <h4>Is loading: {isLoading ? "True" : "False"}</h4>

      <pre>...</pre>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.completed ? "DONE " : "Pending "}</strong>
            {todo.title}
          </li>
        ))}
      </ul>

      <button>Next ToDo</button>
    </>
  );
};
