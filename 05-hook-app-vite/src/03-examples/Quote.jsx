import { useLayoutEffect, useRef, useState } from 'react';

export const Quote = ({ author, quote }) => {
  const [boxSizing, setBoxSizing] = useState({ width: 0, height: 0 });
  const pRef = useRef()

  useLayoutEffect(() => {
    const { width, height } = pRef.current.getBoundingClientRect();
    setBoxSizing({ width, height });
  }, [quote])
  
  return (
    <>
      <blockquote 
        className="blockquote text-end"
        style={{ display: 'flex' }}
      >
        <p ref={pRef} className="mb-2">
          { quote }
        </p>
        <footer className="blockquote-footer">
          { author }
        </footer>
      </blockquote>

      <code>
        { JSON.stringify(boxSizing) }
      </code>
    </>
  )
}