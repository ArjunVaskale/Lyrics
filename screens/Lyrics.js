import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import {ProgressBar} from 'react-native-paper';
import Slider from 'react-native-slider';

// const App = () => {
//   const [time, setTime] = useState(1);
//   const [length, setLength] = useState(1);
//   const [temp, setTemp] = useState(0);

//   const dict = {
//     1: 'Teri',
//     2: 'Jhalak',
//     3: 'Asharfi',
//     4: 'Srivalli',
//     5: 'Naina',
//     6: 'Madak',
//     7: 'Barfi',
//     8: 'Teri',
//     9: 'Jhalak',
//     10: 'Asharfi',
//     11: 'Srivalli',
//     12: 'Bathein',
//     13: 'Kare',
//     14: 'Do',
//     15: 'Halfi',
//   };

//   const callme = id => {
//     if (time <= length) {
//       setTime(time => setTime(time + 1));
//       setTemp(temp + 1);
//       console.warn('if', time);
//     } else {
//       clearTimeout(id);
//       console.warn('else');
//     }
//   };

//   const startLyrics = () => {
//     // console.warn('called ...', time);
//     setTime(() => setTime(0));
//     const id = setInterval(callme, 1000, id);
//   };

//   useEffect(() => {
//     setLength(Object.keys(dict).length);
//   }, []);

//   //   useEffect(() => {
//   //     const interval = setTimeout(() => {
//   //       if (time <= length) {
//   //         setTime(time + 1);
//   //       }
//   //       console.warn(time);
//   //     }, 1000);
//   //   }, [time]);

//   return (
//     <View style={styles.container}>
//       <View style={styles.space}>
//         <Text style={styles.lyrics}>Srivalli Song Lyrics</Text>
//       </View>

//       <ProgressBar
//         progress={time / length}
//         thumbTintColor={'#343434'}
//         color={'black'}
//         style={{width: 250, height: 3}}
//         onPress={() => {
//           alert('clicked ...');
//         }}
//       />
//       <Slider
//         value={temp}
//         style={{width: 240, height: 4, marginTop: 20}}
//         onValueChange={value => {
//           setTemp(value);
//           //   console.warn('value', parseInt(value * length));
//           console.warn('time', value);
//           setTime(parseInt(value * length));
//         }}
//         // onSlidingComplete={() => {
//         //   setTime(0);
//         // }}
//       />
//       <View style={(styles.space, {backgroundColor: 'teal', marginTop: 20})}>
//         <Text style={{fontSize: 25, fontWeight: '700', color: 'white'}}>
//           {dict[time] ? dict[time] : 'The End'}
//         </Text>
//       </View>
//       <TouchableOpacity style={styles.button} onPress={startLyrics}>
//         <Text>Start Lyric</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default App;

export default class App extends React.Component {
  state = {
    temp: 0,
    time: 1,
    length: 0,
    dict: {
      1: 'Teri',
      2: 'Jhalak',
      3: 'Asharfi',
      4: 'Srivalli',
      5: 'Naina',
      6: 'Madak',
      7: 'Barfi',
      8: 'Teri',
      9: 'Jhalak',
      10: 'Asharfi',
      11: 'Srivalli',
      12: 'Bathein',
      13: 'Kare',
      14: 'Do',
      15: 'Halfi',
    },
  };

  componentDidMount() {
    this.setState({length: Object.keys(this.state.dict).length});
  }
  startLyrics = () => {
    timerId = setInterval(() => {
      if (this.state.time <= this.state.length) {
        console.warn('calling ...');
        console.warn(this.state.time);
        this.setState({time: this.state.time + 1});
        this.setState({temp: this.state.time / this.state.length});
      } else {
        clearInterval(timerId);
      }
    }, 1000);
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Srivalli Song Lyrics</Text>
        <Slider
          value={this.state.temp}
          style={{width: 240, height: 4, margin: 30}}
          onValueChange={value => {
            this.setState({time: value});
            this.setState({temp: value});
            //   console.warn('value', parseInt(value * length));
            console.warn('time', value);
            this.setState({time: parseInt(value * this.state.length)});
          }}
          // onSlidingComplete={() => {
          //   setTime(0);
          // }}
        />
        <TouchableOpacity style={styles.button} onPress={this.startLyrics}>
          <Text>Start Lyrics</Text>
        </TouchableOpacity>
        <Text style={styles.lyrics}>{this.state.dict[this.state.time]}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  lyrics: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 90,
  },
  space: {
    margin: 10,
  },
  button: {
    backgroundColor: 'lightblue',
    margin: 20,
    borderRadius: 20,
    height: 30,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
