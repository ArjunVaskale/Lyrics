/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {Button} from 'react-native';
const {act} = renderer;
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
jest.mock('react-native-paper');
// jest.mock('react-native-paper/screens/Lyrics', () => 'Lyrics');
jest.mock('react-native-paper', () => {
  const RealModule = jest.requireActual('react-native-paper');
  const MockedModule = {
    ...RealModule,
    Portal: ({children}) => <View>{children}</View>,
  };
  return MockedModule;
});
it('home screen renders correctly', () => {
  renderer.create(<App />);

  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

// it('Enable-Disable Button ', () => {
//   const tree = renderer.create(<App />);
//   let button1 = tree.root.findAllByProps({
//     testID: 'enable-disable-button',
//   }).props;
//   expect(button1).toBeFalsy();
// });

// it('Change Color Button', () => {
//   const tree = renderer.create(<App />);
//   const button2 = tree.root.findByProps({
//     testID: 'change-color-button',
//   }).props;
//   expect(button2).toBeTruthy();
// });

// it('onPress on Enable-Disable-Button', () => {
//   const tree = renderer.create(<App />);
//   let button2 = tree.root.findByProps({
//     testID: 'enable-disable-button',
//   }).props;
//   act(() => {
//     button2.onPress();
//   });
//   act(() => tree.update(<App />));
//   let button3 = tree.root.findAllByProps({
//     testID: 'change-color-button',
//   }).props;
//   expect(button3).toBeFalsy();
// });

// it('checking functions', () => {
//   const myMock = jest.fn(x => x * 3);
//   myMock.mockReturnValueOnce(10);
//   const check = myMock();
//   console.log(check);
//   expect(check).toBe(10);
// });

// })

// import React from 'react';
// import {cleanup, render} from '@testing-library/react-native';

// import App from '../App';

// import {shallow} from 'enzyme';
// import Enzyme from 'enzyme';

// import Adapter from 'enzyme-adapter-react-16';
// import {Button} from 'react-native';
// Enzyme.configure({adapter: new Adapter()});

// afterEach(cleanup);

// describe('App', () => {
//   it('should show hello world', () => {
//     const helloWorldText = 'Hello World!';
//     const notFoundText = 'Not found text';

//     const {toJSON, getByText, queryByText} = render(<App />);

//     const foundHelloWorldTextElement = getByText(helloWorldText);
//     const notFoundTextElement = queryByText(notFoundText);

//     expect(foundHelloWorldTextElement.props.children).toEqual(helloWorldText);
//     expect(notFoundTextElement).toBeNull();
//     expect(toJSON()).toMatchSnapshot();
//   });

// it('should find the button via testId', () => {
//   const testIdName = 'enable-disable-button';

//   const {getByTestId} = render(<App />);

//   const foundButton = getByTestId(testIdName);

//   console.log(foundButton);

//   expect(foundButton).toBeTruthy();
// });

// it('should find the button title', () => {
//   const onPressEvent = jest.fn();

//   const wrapper = shallow(<App onPress={onPressEvent} />);

//   console.log(wrapper);

//   wrapper.find('Button').first().props().onPress();

//   // Check that our handler have been called 1 time
//   expect(onPressEvent).toHaveBeenCalledTimes(0);
// });

// test('test onPress functionality', () => {
//   const onPressEvent = jest.fn();
//   onPressEvent.mockReturnValue('Link on press invoked');
//   const wrapper = shallow(<App onPress={onPressEvent} />);
//   wrapper.find(Button).first().props().onPress();
//   expect(onPressEvent.mock.calls.length).toBe(1);
// });
// });
