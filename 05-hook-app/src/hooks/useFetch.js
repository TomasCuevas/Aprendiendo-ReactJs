import { useEffect, useRef, useState } from "react"

export const useFetch = ( url ) => {
    const isMounted = useRef( true );
    const [state, setState] = useState( { data: null, loading: true, error: null } );

    useEffect( () => {

        return () => {
            isMounted.current = false;
        }

    }, [])

    useEffect( () => {

        setState({ data: null, loading: true, error: null });
        
        fetch( url )
        
            .then( res => res.json() )
            .then( data => {
                
                if ( !!isMounted ) {
                    setState({
                        data,
                        loading: false,
                        error: null
                    });
                }
            })

            .catch( err => {
                console.log( err );
                setState({
                    data: null,
                    loading: false,
                    error: true
                })
            });

    }, [url] )

    return state;
}