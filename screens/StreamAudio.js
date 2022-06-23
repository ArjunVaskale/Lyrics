import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import SoundPlayer from 'react-native-sound-player';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {LogBox} from 'react-native';

const StreamAudio = () => {
  useEffect(() => {
    LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message
    _onFinishedPlayingSubscription = SoundPlayer.addEventListener(
      'FinishedPlaying',
      ({success}) => {
        console.log('finished playing', success);
      },
    );
    _onFinishedLoadingSubscription = SoundPlayer.addEventListener(
      'FinishedLoading',
      ({success}) => {
        console.log('finished loading', success);
      },
    );
    _onFinishedLoadingFileSubscription = SoundPlayer.addEventListener(
      'FinishedLoadingFile',
      ({success, name, type}) => {
        console.log('finished loading file', success, name, type);
      },
    );
    _onFinishedLoadingURLSubscription = SoundPlayer.addEventListener(
      'FinishedLoadingURL',
      ({success, url}) => {
        console.log('finished loading url', success, url);
      },
    );
    return () => {
      _onFinishedPlayingSubscription.remove();
      _onFinishedLoadingSubscription.remove();
      _onFinishedLoadingURLSubscription.remove();
      _onFinishedLoadingFileSubscription.remove();
    };
  });

  play = () => {
    try {
      SoundPlayer.playUrl('https://pagalworld.com.se/files/download/id/4744');
    } catch (e) {
      console.log(`cannot play the sound file`, e);
    }
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Hello, world!</Text>
      <Pressable onLongPress={() => alert('long pressed')} onPress={play}>
        <View
          style={{
            height: 40,
            borderRadius: 25,
            width: 100,
            justifyContent: 'center',
            backgroundColor: '#4267B2',
            margin: 10,
          }}>
          <Text style={{alignSelf: 'center'}}>PLAY</Text>
        </View>
      </Pressable>
      <Pressable onPress={() => SoundPlayer.pause()}>
        <View
          style={{
            height: 40,
            borderRadius: 25,
            width: 100,
            justifyContent: 'center',
            backgroundColor: '#4267B2',
            margin: 10,
          }}>
          <Text style={{alignSelf: 'center'}}>PAUSE</Text>
        </View>
      </Pressable>
      <Pressable onPress={() => SoundPlayer.resume()}>
        <View
          style={{
            height: 40,
            borderRadius: 25,
            width: 100,
            justifyContent: 'center',
            backgroundColor: '#4267B2',
          }}>
          <Text style={{alignSelf: 'center'}}>RESUME</Text>
        </View>
      </Pressable>
    </View>
  );
};
export default StreamAudio;
