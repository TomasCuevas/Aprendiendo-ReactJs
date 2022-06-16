import { useState } from "react"

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('')

  const onInputChange = ({ target }) => {
    setInputValue(target.value)
  }

  const onSubmit = ( event ) => {
    event.preventDefault();
    if ( inputValue.trim().length <= 2 ) return;
    
    setCategories( categories => [inputValue, ...categories] )
    setInputValue('');
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