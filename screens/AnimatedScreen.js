import React, {Component} from 'react';
import {
  Animated,
  Text,
  View,
  StyleSheet,
  Button,
  SafeAreaView,
} from 'react-native';

class App extends Component {
  // fadeAnim will be used as the value for opacity. Initial Value: 0
  state = {
    fadeAnim: new Animated.ValueXY(0, 0),
    r: 10,
    b: 10,
    g: 10,
  };

  fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(this.state.fadeAnim, {
      toValue: {x: 350, y: 150},
      duration: 2000,
    }).start();
  };

  fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(this.state.x, {
      toValue: 99,
      duration: 3000,
    }).start();
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Animated.View
          style={[
            styles.fadingContainer,
            {
              width: 100,
              height: 100,
              top: this.state.fadeAnim.x,
              left: this.state.fadeAnim.y,
              backgroundColor: 'red',
            },
          ]}>
          <View style={styles.fadingText} />
        </Animated.View>
        <View style={styles.buttonRow}>
          <Button title="Fade In View" onPress={this.fadeIn} />
          <Button title="Fade Out View" onPress={this.fadeOut} />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'aqua',
  },
  fadingContainer: {
    borderRadius: 100,
    position: 'absolute',
  },

  buttonRow: {
    flexBasis: 100,
    justifyContent: 'space-evenly',
    marginVertical: 16,
    color: 'black',
  },
});

export default App;
