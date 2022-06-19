import React from "react";

export const Notes = React.memo(({ notes, addNote }) => {

    console.log( 'child renderizado!' );
    
    return (
        <>
            <h2 className="todo__title">Todas las notas</h2>
            <ul className="todo__container">
                {
                    notes.map( (td, index) => (
                        <li 
                            className="todo" 
                            key={ index }
                        >
                            {`${ index }- ${ td }`}
                        </li>  
                    ))
                }
            </ul>

            <button 
                className="button"
                onClick={ addNote }
            >
                Agregar nueva nota
            </button>
        </>
    )
})