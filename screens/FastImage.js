import React from 'react';
import {Text, View, Image} from 'react-native';
import FastImage from 'react-native-fast-image';
import {DstATopComposition} from 'react-native-image-filter-kit';

const HelloWorldApp = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <FastImage
        style={{width: 200, height: 200}}
        source={{
          uri: 'https://unsplash.it/400/400?image=1',
          priority: FastImage.priority.high,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
      <Image
        source={{uri: 'https://unsplash.it/400/400?image=1'}}
        style={{width: 200, height: 200}}
      />
      <DstATopComposition
        dstImage={
          <View>
            <FastImage
              style={{width: 80, height: 80}}
              source={{
                uri: 'https://unsplash.it/400/400?image=1',
                priority: FastImage.priority.high,
              }}
              resizeMode={FastImage.resizeMode.contain}
            />
          </View>
        }
        srcImage={
          <Image
            style={{
              height: 80,
              width: 80,
            }}
            resizeMode="contain"
            source={{
              uri: 'https://freepngimg.com/thumb/hexagon/7-2-hexagon-free-png-image.png',
            }}
          />
        }
      />
    </View>
  );
};
export default HelloWorldApp;
