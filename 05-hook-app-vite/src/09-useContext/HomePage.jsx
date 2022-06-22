import { useContext } from "react"

/**
 * @context
 */
import { UserContext } from "./context/UserContext"

export const HomePage = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      { (user?.name) ? <h1>Home <small>| {user.name}</small></h1> : <h1>HomePage</h1> }
      <hr />

      <pre aria-label="pre">
        {  JSON.stringify(user, null, 3) }
      </pre>

    </>
  )
}