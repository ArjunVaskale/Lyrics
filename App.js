import React from 'react';
import Lyrics from './screens/Lyrics';
import {Provider as PaperProvider} from 'react-native-paper';
import AnimatedScreen from './screens/AnimatedScreen';
import DiffScreens from './screens/DiffScreens';
import MainScreen from './screens/contextText/MainScreen';
import Hexagon from './screens/Hexagon';
import HexagonProject from './screens/HexagonProject';
const App = () => {
  return <HexagonProject />;
};

export default App;

// import React from 'react';
// import {Text, View} from 'react-native';

// const HelloWorldApp = () => {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}>
//       <Text>Hello, world!</Text>
//     </View>
//   );
// };
// export default HelloWorldApp;
