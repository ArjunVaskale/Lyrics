import React from 'react';

import {DstATopComposition} from 'react-native-image-filter-kit';

//https://stackoverflow.com/questions/58840849/hexagon-shaped-image-in-react-native

import {
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import HexagonShape from '../component/HexagonShape';

const HelloWorldApp = () => {
  let HexagonBunch = [];
  for (let i = 0; i < 4; i++) {
    HexagonBunch.push(
      <View style={{flexDirection: 'row', margin: -10}} key={i}>
        <View style={{marginTop: 32, marginRight: -35}}>
          <View style={{marginBottom: -27}}>
            <HexagonShape />
          </View>
          <View>
            <HexagonShape />
          </View>
        </View>
        <View>
          <View style={{marginBottom: -27}}>
            <HexagonShape />
          </View>
          <View style={{marginBottom: -27}}>
            <HexagonShape />
          </View>
          <View>
            <HexagonShape />
          </View>
        </View>
        <View style={{marginLeft: -35, marginTop: 32}}>
          <View style={{marginBottom: -27}}>
            <HexagonShape />
          </View>
          <View>
            <HexagonShape />
          </View>
        </View>
      </View>,
    );
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        style={{
          height: '100%',
          width: '100%',
        }}
        source={{
          uri: 'https://images.pexels.com/photos/1172064/pexels-photo-1172064.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        }}>
        <View
          style={{
            flex: 1,
          }}>
          <View style={{flex: 0.7}}>
            <ScrollView>
              <ScrollView
                horizontal="true"
                showsHorizontalScrollIndicator="false">
                <View
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    flex: 0.7,
                  }}>
                  {HexagonBunch}
                </View>
              </ScrollView>
            </ScrollView>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              flex: 0.2,
              marginBottom: -180,
            }}>
            <HexagonShape />

            <HexagonShape />

            <HexagonShape />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
export default HelloWorldApp;

{
  /* <ImageBackground
              style={{
                width: 120,
                height: 120,
                resizeMode: 'cover',
              }}
              source={{
                uri: 'https://freepngimg.com/thumb/hexagon/7-2-hexagon-free-png-image.png',
              }}>
              <HexagonView
                isHorizontal={true}
                style={{
                  height: 100,
                  width: 100,
                  backgroundColor: 'red',
                  marginLeft: 10,
                  marginTop: 10,
                }}>
                <Image
                  resizeMode="cover"
                  source={{
                    uri: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
                  }}
                  style={{
                    width: 90,
                    height: 90,
                    position: 'absolute',
                    opacity: 0.7,
                  }}
                />
              </HexagonView>
            </ImageBackground> */
}

{
  /* <View
style={{
  justifyContent: 'center',
  alignItems: 'center',
  alignContent: 'center',
}}>
<Text>hello dudu</Text>
<ImageBackground
  source={{
    uri: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
  }}
  resizeMode="contain"
  style={{width: 120, height: 120}}>
  <View style={{opacity: 0.5}}>
    <Hexagon scale={2} color="teal" rotate={90} />
  </View>
</ImageBackground>
</View> */
}

{
  /* <Image
            style={{
              width: 150,
              height: 150,
            }}
            source={{
              uri: 'https://freepngimg.com/thumb/hexagon/7-2-hexagon-free-png-image.png',
            }}
          />
          <Image
            resizeMode="contain"
            style={{
              width: 100,
              height: 100,
              position: 'absolute',
              top: 150,
              overflow: 'hidden',
            }}
            source={{
              uri: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
            }}
          /> */
}
