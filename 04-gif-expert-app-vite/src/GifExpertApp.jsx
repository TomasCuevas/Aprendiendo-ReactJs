import { useState } from "react"

/**
 * @components
 */
import { AddCategory } from "./components/AddCategory/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);
  
  const onAddCategory = ( newCategory ) => {
    setCategories([ newCategory, ...categories ]);
  }
  
  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={onAddCategory} />

      <ol>
        {
          categories.map( category => <li key={category}>{ category }</li> )
        }
      </ol>
    </>
  )
}