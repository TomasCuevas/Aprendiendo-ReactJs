import { useState } from "react"

export const AddCategory = () => {
  const [inputValue, setInputValue] = useState('')

  const onInputChange = ({ target }) => {
    setInputValue(target.value)
  }

  const onSubmit = ( event ) => {
    event.preventDefault();
  }
  
  return (
    <form onSubmit={onSubmit}>
      <input 
        type="text" 
        value={inputValue}
        onChange={onInputChange}
        placeholder="Buscar gif"
      />
    </form>
  )
}