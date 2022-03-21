import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import {DstATopComposition} from 'react-native-image-filter-kit';

export default class HexagonProject extends React.Component {
  render() {
    HexagonShape = () => (
      <View>
        <TouchableOpacity
          onPress={() => {
            alert('hello dudu');
          }}>
          <ImageBackground
            style={{height: 120, width: 120, transform: [{rotate: '90deg'}]}}
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
                        height: 110,
                        width: 110,
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
                      height: 110,
                      width: 110,
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
                hello left 12
              </Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    );

    var HexagonGroup = [];
    var count = 16;
    var round = 0;

    let i = 0;
    while (i < count) {
      HexagonGroup.push(
        <View
          style={{
            marginTop: 0,
            marginRight: -35,
            marginLeft: round % 2 == 0 ? 40 : 0,
            marginTop: round % 2 == 0 ? -47 : 0,
            marginBottom: round % 2 == 0 ? -47 : 0,
            key : {i}
          }}>
          <View style={{flexDirection: 'row'}} >
            {i < count ? <HexagonShape  /> : null}
            {i + 1 < count ? (
              <View style={{marginLeft: -35}}>
                <HexagonShape />
              </View>
            ) : null}
            {i + 2 < count ? (
              <View style={{marginLeft: -35}}>
                <HexagonShape />
              </View>
            ) : null}
            {i + 3 < count ? (
              <View style={{marginLeft: -35}}>
                <HexagonShape />
              </View>
            ) : null}
           
          </View>
        </View>,
      );
      round = round + 1;

      if (round % 2 == 0) {
        i = i + 4;
      } else {
        i = i + 4;
      }
    }

    return (
      <SafeAreaView style={{flex : 1}}>
        <View style ={{justifyContent : 'center' , alignItems : 'center' , flex : .20}}>
          <Text style={{fontSize : 40 , fontWeight : 'bold'}}>POETRY</Text>
        </View>
        <ScrollView style ={{flex : .80}}>
          <View style={{transform: [{rotate: '270deg'}], flexWrap: 'wrap' , marginTop : '24%' , marginLeft : '10%'}}>
            {HexagonGroup}
          </View>
          <View style={{marginBottom: 40}}></View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
