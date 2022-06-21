import { useEffect, useReducer } from "react";

/**
 * @reducer
 */
import { todoReducer } from "../08-useReducer/todoReducer";

const initTodos = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
}

export const useTodo = () => {
  const [todos, dispatch] = useReducer( todoReducer, [], initTodos )
  const todosCount = todos.length;
  const pendingTodosCounter = todos.filter(todo => !todo.done).length;

  const onNewTodo = ( newTodo ) => {
    const action = {
      type: 'TODO: add todo',
      payload: newTodo
    }

    dispatch( action );
  }

  const onDeleteTodo = ( id ) => {
    const action = {
      type: 'TODO: delete todo',
      payload: id
    }

    dispatch( action );
  }

  const onToggleTodo = ( id ) => {
    const action = {
      type: 'TODO: toggle todo',
      payload: id
    }

    dispatch( action );
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [ todos ]);

  return {
    todos,
    onNewTodo,
    onDeleteTodo,
    onToggleTodo,
    todosCount,
    pendingTodosCounter
  }
}