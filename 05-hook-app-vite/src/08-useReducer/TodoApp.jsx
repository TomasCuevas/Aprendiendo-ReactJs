import { useEffect, useReducer } from "react"

/**
 * @reducer
 */
import { todoReducer } from "./todoReducer";

/**
 * @components
 */
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";

const initTodos = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
}

export const TodoApp = () => {
  const [todos, dispatch] = useReducer( todoReducer, [], initTodos )

  const onNewTodo = ( newTodo ) => {
    const action = {
      type: 'TODO: add todo',
      payload: newTodo
    }

    dispatch( action );
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [ todos ]);

  return (
    <>
      <h1>ToDo App: 10 <small>pendientes: 2</small></h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todos={ todos } />
        </div>

        <div className="col-5">
          <h4>Agregar ToDo</h4>
          <hr />
          <TodoAdd onNewTodo={ onNewTodo } />
        </div>

      </div>

    </>
  )
}