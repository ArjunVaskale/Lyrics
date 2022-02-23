import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {DstATopComposition} from 'react-native-image-filter-kit';

export default function HexagonShape() {
  return (
    <TouchableOpacity
      onPress={() => {
        alert('hello dudu');
      }}>
      <ImageBackground
        style={{height: 90, width: 90}}
        source={{
          uri: 'https://freepngimg.com/thumb/hexagon/7-2-hexagon-free-png-image.png',
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            top: 5,
          }}>
          <DstATopComposition
            dstImage={
              <View>
                <Image
                  style={{
                    height: 80,
                    width: 80,
                  }}
                  resizeMode="contain"
                  source={{
                    uri: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
                  }}
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
          <Text
            style={{
              position: 'absolute',
              color: 'yellow',
              fontWeight: 'bold',
              fontSize: 10,
            }}>
            hello left 1
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}
