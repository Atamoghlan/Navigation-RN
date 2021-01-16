import React, {Component} from 'react';
import { splashScreenStyles } from "../styles/style";
import { Animated, View, Easing, Image, Text, Button } from 'react-native';
import LinearGradient from "react-native-linear-gradient";

export default class Loading extends Component {
    constructor() {
        super();
        this.state = {
            animationOpacity: new Animated.Value(0)
        }
    }
    componentDidMount() {
        this.loading()
    }
    createAnimation = (value, duration, easing, delay = 0) => {
        this.state.animationOpacity.setValue(0);
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
      loading = () => {
        this.createAnimation(this.state.animationOpacity, 1000, Easing.linear, 500).start(()=> {this.loading()})
      }
      render() {
        const loadingOpacity = this.state.animationOpacity.interpolate({
            inputRange: [0, 0.15, 0.30, 0.45, 0.60, 0.75, 0.90, 1],
            outputRange: [0, 0.45, 0, 0.6, 0, 1, 0, 1]
          })
          return (
              <View style={splashScreenStyles.mainContainer}>
                  <Animated.Image source={require('../Movies/images/Garfield.png')}
                    style={[splashScreenStyles.loadingImage, {opacity: loadingOpacity} 
                    ]}/>
              </View>
          );
    }
}