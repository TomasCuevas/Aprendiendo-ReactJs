import { useReducer } from "react"

/**
 * @reducer
 */
import { todoReducer } from "./TodoReducer";

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
  const [state, dispatch] = useReducer( todoReducer, initialState )

  return (
    <>
      <h1>ToDo App: 10 <small>pendientes: 2</small></h1>
      <hr />

      <div className="row">

        <div className="col-7">
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between">
              <span className="align-self-center">Item 1</span>
              <button className="btn btn-danger">Borrar</button>
            </li>
          </ul>
        </div>

        <div className="col-5">
          <h4>Agregar ToDo</h4>
          <hr />
          <form>
            <input 
              type="text" 
              placeholder="¿Qué hay que hacer?"
              className="form-control"
            />
            <button
              type="submit"
              className="btn btn-outline-primary mt-1"
            >
              Agregar
            </button>
          </form>
        </div>

      </div>

    </>
  )
}