import { useReducer } from "react"

/**
 * @reducer
 */
import { todoReducer } from "./todoReducer";

/**
 * @components
 */
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";

const initialState = [
  {
    id: new Date().getTime(),
    todo: 'Recolectar gema del alma',
    done: false
  },
  {
    id: new Date().getTime() * 2,
    todo: 'Recolectar gema del infinito',
    done: false
  }
];

export const TodoApp = () => {
  const [todos, dispatch] = useReducer( todoReducer, initialState )

  const onNewTodo = ( newTodo ) => {
    const action = {
      type: 'TODO: add todo',
      payload: newTodo
    }

    dispatch( action );
    console.log(newTodo);
  }

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