// const newMessage = {
//   title: 'First Page',
//   message: 'This is the first page of the app',
// }

// const saludo = 'Hola, que tal?'

export const FirstApp = ({ title, subtitle }) => {

  return (
    <>
      <h1>{ title }</h1>
      {/* <code>{ JSON.stringify( newMessage ) }</code> */}
      <p>{ subtitle }</p>
    </>
  )
}