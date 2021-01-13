import React, { Component } from 'react';
import { splashScreenStyles } from "../styles/style";
import { Animated, View, Easing, Image, Text, Button } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import { Drawer } from "../Navigation/Drawer";

export default class Splash extends Component {

  constructor() {
    super();
    this.state = {
      animationValue: new Animated.Value(0.2),
      animationOpacity: new Animated.Value(0)
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
    this.state.animationOpacity.setValue(0);
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
  Loading = () => {
    this.createAnimation(this.state.animationOpacity, 10000, Easing.linear, 500).start()
  }

  render() {

    const logoScale = this.state.animationValue.interpolate({
      inputRange: [0, 0.40, 0.9, 1],
      outputRange: [0, 0.45,0.45, 0]
    })
    const LoadingOpacity = this.state.animationOpacity.interpolate({
      inputRange: [0, 0.15, 0.30, 0.45, 0.60, 0.75, 0.90, 1],
      outputRange: [0, 0.3, 0, 0.45, 0, 0.6, 0, 1]
    })

    return (
      <LinearGradient
        colors={['#4682B4', 'red', '#4682B4']}
        style={{ flex: 1 }}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}>

        <View style={splashScreenStyles.MainContainer}>
          <Animated.View style={[splashScreenStyles.animatedBox, { transform: [{ scale: logoScale }] }]}>
              <Image
                style={splashScreenStyles.logo}
                source={require('../Movies/images/MoviesAppLogo.png')} />
          </Animated.View>
          <View style={splashScreenStyles.viewSecond}>
            <Text onPress={this.Loading}
              style={splashScreenStyles.loadingText}>Run Loading</Text>
            <Animated.Image source={require('../Movies/images/Garfield.png')}
              style={[splashScreenStyles.loadingImage, {opacity: LoadingOpacity} 
              ]}/>
          </View>
        </View>
      </LinearGradient>
    );
  }
};
