import React, { useState } from 'react';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState( [ 'Naruto', 'One Punch', 'Dragon Ball' ] );

    const handleAdd = () => {
        setCategories( [ ...categories, 'Nuevo Elemento' ] );
    }
    
    return (
        <>
            <h2>GifExpertApp</h2>
            <hr/>

            <button onClick={ handleAdd }>Agregar</button>
            <ol>
                {
                    categories.map( ( category ) => {
                        return <li key={ category }>{ category }</li>
                    })
                }
            </ol>
        </>
    )
}