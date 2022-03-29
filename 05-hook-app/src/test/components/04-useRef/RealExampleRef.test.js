import { shallow } from "enzyme";

import { RealExampleRef } from '../../../components/04-useRef/RealExampleRef';

describe('Pruebas en <RealExampleRef />', () => {
  
  const wrapper = shallow(<RealExampleRef />);

  test('debe de mostrar el componente', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('MultiplesCustomHooks').exists()).toBe(false);
  });

  test('debe de mostrar el componente <MultiplesCustomHooks />', () => {  
    wrapper.find('button').simulate('click');
    expect(wrapper.find('MultiplesCustomHooks').exists()).toBe(true);
  });
})