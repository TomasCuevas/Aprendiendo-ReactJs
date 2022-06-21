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
      <h1>ToDo App</h1>
      <hr />

      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </>
  )
}