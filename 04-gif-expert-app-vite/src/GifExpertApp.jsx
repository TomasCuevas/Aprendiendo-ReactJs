import { useState } from "react"

/**
 * @components
 */
import { AddCategory } from "./components/AddCategory/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);
  
  const onAddCategory = ( value ) => {
    setCategories([ value, ...categories ]);
  }
  
  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory setCategories={setCategories} />

      <ol>
        {
          categories.map( category => <li key={category}>{ category }</li> )
        }
      </ol>
    </>
  )
}