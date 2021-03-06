import { useForm } from "../hooks/useForm"

export const TodoAdd = ({ onNewTodo }) => {
  const { todo, onInputChange, onResetForm } = useForm({ todo: '' })

  const onFormSubmit = ( e ) => {
    e.preventDefault();
    if (todo.trim().length <= 1) return

    const newTodo = {
      id: new Date().getTime(),
      describe: todo,
      done: false
    }

    onNewTodo(newTodo);
    onResetForm();
  }
  
  return (
    <form 
      onSubmit={ onFormSubmit }
      autoComplete="off"
    >
      <input 
        type="text" 
        placeholder="¿Qué hay que hacer?"
        className="form-control"
        name="todo"
        value={ todo }
        onChange={ onInputChange }
        aria-label="inputAdd"
      />
      <button
        type="submit"
        className="btn btn-outline-primary mt-1"
      >
        Agregar
      </button>
    </form>
  )
}