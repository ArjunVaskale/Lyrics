import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Dimensions,
  Text,
  Image,
} from 'react-native';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {scrollInterpolator, animatedStyles} from '../utils/animations';

const DATA = [
  {
    id: 1,
    title: 'first',
    imgUrl:
      'https://www.appcoda.com/wp-content/uploads/2015/04/react-native.png',
  },
  {
    id: 2,
    title: 'Second',
    imgUrl:
      'https://www.appcoda.com/wp-content/uploads/2015/04/react-native.png',
  },
  {
    id: 3,
    title: 'third',
    imgUrl:
      'https://www.appcoda.com/wp-content/uploads/2015/04/react-native.png',
  },
];
const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');
function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);
const {width: screenWidth} = Dimensions.get('window');
const slideHeight = viewportHeight * 0.56;
const slideWidth = wp(70);
const itemHorizontalMargin = 10;
export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;
const entryBorderRadius = 0;

export default class App extends React.Component {
  state = {
    currentIndex: 0,
  };
  constructor(props) {
    super(props);
    this._renderItem = this._renderItem.bind(this);
  }

  //   _renderItem = ({item, index}) => {
  //     return (
  //       <View style={{}}>
  //         <Image
  //           source={{uri: item.imgUrl}}
  //           style={{
  //             height: this.state.currentIndex == index ? 100 : 40,
  //             width: this.state.currentIndex == index ? 100 : 40,
  //           }}
  //         />
  //       </View>
  //     );
  //   };

  _renderItem({item, index}, parallaxProps) {
    return (
      <View style ={{ width : this.state.currentIndex == index ? 200 : 120, height : this.state.currentIndex == index ? 200:  120  , marginLeft : 40}}>
        <ParallaxImage
         
          source={{uri: item.imgUrl}}
          containerStyle={styles.imageContainer}
          // style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}

        />
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
      </View>
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/* <Carousel
          ref={c => {
            this._carousel = c;
          }}
          data={DATA}
          renderItem={this._renderItem}
          sliderWidth={450}
          itemWidth={160}
          containerCustomStyle={styles.carouselContainer}
          inactiveSlideShift={0}
          onSnapToItem={index => this.setState({currentIndex: index})}
        /> */}

        <Carousel
          sliderWidth= { sliderWidth   }
          inactiveSlideShift={-50}
          itemWidth={sliderWidth - 230}
          data={DATA}
          loop={true}

          renderItem={this._renderItem}
          hasParallaxImages={true}
        inactiveSlideShift={35}
          onSnapToItem={index => this.setState({currentIndex: index})}
        />

        <Carousel
          data={DATA}
          renderItem={this._renderItem}
          ref={c => {
            this.carousel = c;
          }}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          hasParallaxImages={true}
          // firstItem={SLIDER_FIRST_ITEM}
          inactiveSlideScale={0.6}
          inactiveSlideOpacity={0}
          inactiveSlideShift={5}
          // containerCustomStyle={sliderStyles.slider}
          // contentContainerCustomStyle={sliderStyles.sliderContentContainer}
          // loop={true}
          loopClonesPerSide={2}
          autoplay={false}
          autoplayDelay={500}
          autoplayInterval={3000}
          onSnapToItem={this._onSnapToItem}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 8,
  },
  title: {
    fontSize: 32,
  },
  carouselContainer: {
    marginTop: 50,
  },
  itemContainer: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'dodgerblue',
  },
  itemLabel: {
    color: 'white',
    fontSize: 24,
  },
  counter: {
    marginTop: 25,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imageContainer: {
    flex: 1,

    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  slideInnerContainer: {
    width: slideWidth,
    height: slideHeight,
    paddingHorizontal: 0,
    marginHorizontal: 0,
    flexDirection: 'row',
    flex: 0,
    alignItems: 'center',
    flexGrow: 1,
  },
  imageContainer: {
    flex: 1,
    marginBottom: 0, // Prevent a random Android rendering issue
    backgroundColor: 'transparent',
  },
  imageContainerEven: {
    backgroundColor: 'transparent',
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'contain',
  },
});
