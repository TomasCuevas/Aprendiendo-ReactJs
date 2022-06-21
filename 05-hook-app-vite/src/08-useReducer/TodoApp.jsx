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
import { useTodo } from "../hooks/useTodo";

export const TodoApp = () => {
  const { todos, onNewTodo, onDeleteTodo, onToggleTodo, todosCount, pendingTodosCounter } = useTodo();

  return (
    <>
      <h1>ToDo App: { todosCount } <small>pendientes: { pendingTodosCounter } </small></h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todos={ todos } onDeleteTodo={ onDeleteTodo } onToggleTodo={ onToggleTodo } />
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