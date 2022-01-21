import React from 'react';
import Lyrics from './screens/Lyrics';
import {Provider as PaperProvider} from 'react-native-paper';

const App = () => {
  return (
    <PaperProvider>
      <Lyrics />
    </PaperProvider>
  );
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
