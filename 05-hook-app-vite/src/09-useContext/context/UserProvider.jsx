import { UserContext } from './UserContext';

const user = {
  id: 123,
  name: 'Tomas Cuevas',
  email: 'tomascuevas15@gmail.com'
}

export const UserProvider = ({ children }) => {

  return (
    <UserContext.Provider value={{ user: user }}>
      { children }
    </UserContext.Provider>
  )
}