import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import CallSplash from './Animations/CallSplash';
import { AppState, Alert } from "react-native";
import netinfo from "@react-native-community/netinfo";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isSplashScreenWork: true,
      appState: AppState.currentState
    }
  }
  componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange)
    setTimeout(() => {
      this.setState({
        isSplashScreenWork: !this.state.isSplashScreenWork
      })
    }, 6000)
    netinfo.addEventListener(state => {
      if (!state.isConnected) {
        Alert.alert('', 'No connection')
      }
    })
  }
  componentWillUnmount() {
    AppState.removeEventListener("change", this._handleAppStateChange);
    netinfo.removeEventListener(state => {
      if (!state.isConnected) {
        Alert.alert('', 'No connection')
      }
    });
  }

  _handleAppStateChange = nextAppState => {
    if (this.state.appState.match(/inactive|background/) &&
      nextAppState === "active") {
      Alert.alert('', 'Welcome back!', [{ text: 'continue' }]);
    }
    this.setState({ appState: nextAppState });
  }
  render() {
    return (
      <CallSplash
        isSplashScreenWork={this.state.isSplashScreenWork}
      />
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
