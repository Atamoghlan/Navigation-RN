import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import CallSplash from './Animations/CallSplash';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isSplashScreenWork: true,
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isSplashScreenWork: !this.state.isSplashScreenWork
      })
}, 6000)
}
  render() {
    return (
      <NavigationContainer>
        <CallSplash
          isSplashScreenWork={this.state.isSplashScreenWork}
        />
      </NavigationContainer>
    );
  }
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
