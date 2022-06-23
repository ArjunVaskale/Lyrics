/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import MarqueeText from 'react-native-marquee';
import {clearErrors} from 'react-native/Libraries/LogBox/Data/LogBoxData';

const App = () => {
  const [btncolor, setColor] = useState('red');
  const [disabled, setDisabled] = useState(true);
  const [enable, setEnable] = useState('Enable');

  const newColor = btncolor === 'red' ? 'blue' : 'red';

  return (
    <SafeAreaView style={styles.Container}>
      <Text style={{color: btncolor}}>hello dudu</Text>

      <Button
        title="Change Color"
        onPress={() => {
          setColor(newColor);
        }}
        disabled={disabled}
        testID="change-color-button"
      />
      <Button
        title={enable}
        onPress={() => {
          setDisabled(disabled == true ? false : true),
            setEnable(enable == 'Enable' ? 'Disable' : 'Enable');
        }}
        testID="enable-disable-button"
      />
      <MarqueeText
        style={{fontSize: 24}}
        duration={300}
        marqueeOnStart
        loop
        marqueeDelay={1000}
        marqueeResetDelay={1000}>
        Hello dudu fkdsjkf dlkfdflkasdfdsklfalsflkds f;lasdfl;dsfj dsa;lfds;lf
        as;dlfksal;dfajslfsd ;lf asf ;slafjdslfja;lsj
      </MarqueeText>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'skyblue',
    height: 30,
    width: 90,
    margin: 10,
    borderRadius: 30,
  },
});
export default App;

///////////////////////////////////////////////////////////////////

// import React, {useCallback} from 'react';
// import {Text} from 'react-native';
// import {Lrc} from 'react-native-lrc';

// const Lyric = ({lrc, currentTime}) => {
//   const lineRenderer = useCallback(
//     ({lrcLine: {millisecond, content}, index, active}) => (
//       <Text style={{textAlign: 'center', color: active ? 'green' : 'inherit'}}>
//         {content}
//       </Text>
//     ),
//     [],
//   );
//   const onCurrentLineChange = useCallback(
//     ({lrcLine: {millisecond, content}, index}) =>
//       console.log(index, millisecond, content),
//     [],
//   );

//   return (
//     <Lrc
//       style={{height: 500}}
//       lrc={lrc}
//       currentTime={currentTime}
//       lineHeight={16}
//       lineRenderer={lineRenderer}
//       onCurrentLineChange={onCurrentLineChange}
//     />
//   );
// };

// export default Lyric;
