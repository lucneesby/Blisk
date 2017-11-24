
import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import firebase from 'firebase';

// Custom Components
import LoginScreen from './src/screens/login/index';
import SignupScreen from './src/screens/signup/index';
import BackgroundPicture from './src/common/BackgroundPicture.js';

export default class App extends Component {
  ComponentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAQ3Z3nAV5O3hCkFnPh0wJLaZChfwFyUQA',
      authDomain: 'blisk-1858a.firebaseapp.com',
      databaseURL: 'https://blisk-1858a.firebaseio.com',
      projectId: 'blisk-1858a',
      storageBucket: 'blisk-1858a.appspot.com',
      messagingSenderId: '771932763082'
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <BackgroundPicture />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
