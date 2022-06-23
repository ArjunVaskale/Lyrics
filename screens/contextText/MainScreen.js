import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  FlatList,
  ActivityIndicator,
  Alert,
} from 'react-native';
import Screen1 from './Screen1';
const MyContext = React.createContext();

const HelloWorldApp = () => {
  const [color, setColor] = React.useState('black');

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <MyContext.Provider value={{color, setColor, someText: 'hello dudu'}}>
        <Screen1 />
      </MyContext.Provider>
    </View>
  );
};
export default HelloWorldApp;
export {MyContext};
