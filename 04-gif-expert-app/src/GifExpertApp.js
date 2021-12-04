import React, { useState } from 'react';

import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState( [ 'Naruto', 'One Punch', 'Dragon Ball' ] );

    // const handleAdd = () => {
    //     setCategories( [ ...categories, 'Nuevo Elemento' ] );
    // }
    
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr/>

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