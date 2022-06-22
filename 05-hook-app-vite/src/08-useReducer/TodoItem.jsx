export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {

  return (
    <li className="list-group-item d-flex justify-content-between">
      <span 
        className={`align-self-center ${todo.done ? 'text-decoration-line-through' : ''}`}
        onClick={ () => onToggleTodo(todo.id) }
        role="button"
        aria-label="span"
      >
        { todo.describe }
      </span>
      <button 
        className="btn btn-danger"
        onClick={ () => onDeleteTodo( todo.id ) }
        aria-label="button"
      >
        Borrar
      </button>
    </li>
  )
}