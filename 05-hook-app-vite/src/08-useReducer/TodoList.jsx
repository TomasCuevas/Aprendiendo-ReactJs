import { TodoItem } from "./TodoItem"

export const TodoList = ({ todos }) => {

  return (
    <ul className="list-group">
      {
        todos.map(({ id, todo, done }) => (
          <TodoItem 
            key={ id } 
            todo={ todo } 
            done={ done }
          />
        ))
      }
    </ul>
  )
} 