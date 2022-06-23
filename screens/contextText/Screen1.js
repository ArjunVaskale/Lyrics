import React, {createContext} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  FlatList,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {MyContext} from './MainScreen';

const HelloWorldApp = () => {
  return (
    <View>
      <MyContext.Consumer>
        {({color, setColor, someText}) => {
          return (
            <View>
              <View style={styles.containerBox}>
                <Text style={{color: color}}>{someText}</Text>
              </View>
              <Button
                title="Change color"
                onPress={() => {
                  setColor(color === 'black' ? 'red' : 'black');
                }}
              />
            </View>
          );
        }}
      </MyContext.Consumer>
    </View>
  );
};
export default HelloWorldApp;

const styles = StyleSheet.create({
  containerBox: {
    widht: '50%',
    height: '30%',
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
