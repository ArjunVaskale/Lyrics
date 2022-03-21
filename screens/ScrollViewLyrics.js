import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  View,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Slider from 'react-native-slider';
import {AutoScrollFlatList} from 'react-native-autoscroll-flatlist';

class App extends React.Component {
  state = {
    temp: 0,
    time: 0,
    length: 10,
    lyrics: [
      'Teri',
      'Jhalak',
      'Asharfi',
      'Srivalli',
      'Naina',
      'madak',
      'barfi',
      'Srivalli',
      'Naina',
      'madak',
      'barfi',
    ],
  };

  startLyrics = () => {
    timerId = setInterval(() => {
     
      if (this.state.time <= this.state.length - 2) {
        console.warn('if block');
        this.componentDidUpdate()
        this.setState({time: this.state.time + 1});
      } else {
        clearInterval(timerId);
      }
    }, 1000);
  };

  componentDidUpdate() {
    if (
      parseInt(this.state.time * this.state.lyrics.length) <
      this.state.lyrics.length
    ) {
      let randomIndex = parseInt(this.state.time * this.state.lyrics.length);
      this.flatListRef.scrollToIndex({animated: true, index: randomIndex});
    }
  }



  render() {
    const Item = ({title}) => (
      <View style={styles.item}>
        <Text style={styles.text}>{title}</Text>
      </View>
    );

    const renderItem = ({item}) => <Item title={item} />;

    return (
      <SafeAreaView style={styles.container}>
        <View style={{flex: 0.3}}>
          <FlatList
            ref={ref => {
              this.flatListRef = ref;
            }}
            initialScrollIndex={parseInt(
              this.state.time * this.state.lyrics.length,
            )}
            data={this.state.lyrics}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={{flex: 0.1}}>
          <Slider
            value={this.state.time}
            style={{width: 240, height: 4, margin: 30}}
            onValueChange={value => {
              this.setState({time: value});

              console.warn(
                parseInt(this.state.time * this.state.lyrics.length),
                this.state.time,
              );
            }}
          />
        </View>
        <Text>----------------------------------------------------</Text>
        <View style={{flex: 0.35}}>
          <ScrollView>
            <Text style={styles.text}>
              {this.state.lyrics[this.state.time]}
            </Text>
            <Text style={styles.text}>
              {this.state.lyrics[this.state.time + 1]}
            </Text>
            <Text style={styles.text}>
              {this.state.lyrics[this.state.time + 2]}
            </Text>
          </ScrollView>
          <TouchableOpacity
            style={{
              height: 40,
              width: 100,
              backgroundColor: 'teal',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 20,
            }}
            onPress={this.startLyrics}>
            <Text>Start Lyrics</Text>
          </TouchableOpacity>
        </View>
        <Text>----------------------------------------------------</Text>

        {/* <View style={{flex: 0.3}}>
          <FlatList
            data={this.state.lyrics}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View> */}
        <View style={{flex: 0.3}}>
          <AutoScrollFlatList
            data={this.state.lyrics}
            threshold={1}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>

        <Text>----------------------------------------------------</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    height: 4,
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});

export default App;
