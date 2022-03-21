import React from 'react';
import {Text, View , Image , Button , Animated  , Easing} from 'react-native';

class HelloWorldApp extends React.Component {

  state = {
    imageHeight : new Animated.Value(100) ,
    opacity : new Animated.Value(1) ,
    scaleX : new Animated.Value(1) , 
  }


  render(){
      const bigger = () => {

        // Animated.timing(this.state.imageHeight, {
        //   toValue : 300 ,
        //   duration : 4000 ,
        //   useNativeDriver :false,
        //   easing: Easing.linear,
        // }).start()

        Animated.timing(this.state.scaleX, {
          toValue : 2 ,
          duration : 4000 ,
          useNativeDriver : false,
          easing: Easing.linear,
        }).start()
        
      }

      const smaller = () => {
        // Animated.timing(this.state.imageHeight, {
        //   toValue : 100 ,
        //   duration : 5000 ,
        //   useNativeDriver :false,
        //   easing: Easing.linear,
        // }).start()

        Animated.timing(this.state.scaleX, {
          toValue : 1 ,
          duration : 4000 ,
          useNativeDriver :false,
          easing: Easing.linear,
        }).start()
      }

      const { opacity, imageHeight } = this.state;
      const maxHeight = imageHeight.interpolate({ 
        inputRange: [0, 1], 
        outputRange: [0, 1000]  // <-- value that larger than your content's height
      });
    

    
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{flex : 1 , marginTop : 200}}>
        <Text>Hello, DUDU !</Text>

        <Button  title="biggger" onPress={bigger}/>
       <Button  title="smaller" onPress={smaller}/>
      </View>

     <View style={{ flex : 1 }}>
     <Animated.Image
        style={{height : this.state.imageHeight  , width : this.state.imageHeight ,
          
            transform: [
              // scaleX, scaleY, scale, theres plenty more options you can find online for this.
              {  scaleX : this.state.scaleX } , 
              {scaleY : this.state.scaleX} // this would be the result of the animation code below and is just a number.
            ]
        
        
        }}
        source = { require('../assests/bee_gif.gif')}/>
     
     </View>
    </View>
  );
};
}
export default HelloWorldApp;