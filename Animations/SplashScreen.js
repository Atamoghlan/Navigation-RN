import React, { Component } from 'react';
import { splashScreenStyles } from "../styles/style";
import { Animated, View, Easing, Image, Text, Button } from 'react-native';
import LinearGradient from "react-native-linear-gradient";

export default class Splash extends Component {

  constructor() {
    super();
    this.state = {
      animationValue: new Animated.Value(0.2)
    }
  }
  componentDidMount() {
    this.myAnimation()
  }
  // startOpacityAnimation=()=>{
  //   this.state.animationValue.setValue(0)
  //   Animated.seq
  // }

  createAnimation = (value, duration, easing, delay = 0) => {
    this.state.animationValue.setValue(0)
    return Animated.timing(
      value,
      {
        toValue: 1,
        duration,
        easing,
        delay,
        useNativeDriver: true
      },
    )
  }

  myAnimation = () => {
      this.createAnimation(this.state.animationValue, 4000, Easing.linear, 500).start()
  }
  

  render() {

    const logoScale = this.state.animationValue.interpolate({
      inputRange: [0, 0.4, 0.9, 1],
      outputRange: [0, 0.55,0.55, 0]
    })
    
    return (
      <LinearGradient
        colors={['#4682B4', 'red', '#4682B4']}
        style={{ flex: 1 }}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}>

        <View style={splashScreenStyles.mainContainer}>
          <Animated.View style={[splashScreenStyles.animatedBox, { transform: [{ scale: logoScale }] }]}>
              <Image
                style={splashScreenStyles.logo}
                source={require('../Movies/images/MoviesAppLogo.png')} />
          </Animated.View>
        </View>
      </LinearGradient>
    );
  }
};
