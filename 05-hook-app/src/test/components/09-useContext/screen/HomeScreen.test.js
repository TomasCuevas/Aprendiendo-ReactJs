import { mount } from "enzyme";
import { UserContext } from "../../../../components/09-useContext/context/UserContext";

import { HomeScreen } from "../../../../components/09-useContext/screen/HomeScreen/HomeScreen";

describe('Pruebas en <HomeScreen />', () => {

  const user = {
    name: 'Tomas',
    email: 'memowin15@gmail.com'
  }

  const wrapper = mount(
    <UserContext.Provider value={{
      user,
    }} >
      <HomeScreen />
    </UserContext.Provider>
  );
  
  test('debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  })
})