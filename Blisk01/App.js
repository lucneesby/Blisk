/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import LoginScreen from './src/screens/login/index';
import SignupScreen from './src/screens/signup/index';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SignupScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
