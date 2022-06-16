import { useState } from "react"

/**
 * @components
 */
import { AddCategory } from "./components/AddCategory/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);
  
  const onAddCategory = () => {
    setCategories([ 'HunterXHunter', ...categories ])
  }
  
  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory />

      <button onClick={onAddCategory}>Agregar Categoria</button>
      <ol>
        {
          categories.map( category => <li key={category}>{ category }</li> )
        }
      </ol>
    </>
  )
}