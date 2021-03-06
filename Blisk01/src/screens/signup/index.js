import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import firebase from 'firebase';
import { Fonts } from '../../utils/Fonts';

const background = require('./signup_bg.png');
const backIcon = require('./back.png');
const personIcon = require('./signup_person.png');
const lockIcon = require('./signup_lock.png');
const emailIcon = require('./signup_email.png');

export default class SignupView extends Component {
  state = { email: '', password: '', name: '' };

  onButtonPress() {
    const { email, password, name } = this.state;
    firebase.auth().SignInWithEmailAndPassword(email, password, name);
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground  
          source={background}
          style={[styles.container, styles.bg]}
          resizeMode="cover"
        >
          <View style={styles.headerContainer}>

            <View style={styles.headerIconView}>
              <TouchableOpacity style={styles.headerBackButtonView}>
                <Image 
                  source={backIcon} 
                  style={styles.backButtonIcon} 
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>

            <View style={styles.headerTitleView}>
              <Text style={styles.titleViewText}>Blisk</Text>
            </View>

          </View>

          <View style={styles.inputsContainer}>

            <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <Image 
                  source={personIcon}
                  style={styles.inputIcon}
                  resizeMode="contain"
                />
              </View>
              <TextInput
                style={[styles.input, styles.whiteFont]}
                placeholder="Name"
                placeholderTextColor="#FFF"
                underlineColorAndroid='transparent' 
              />
            </View>

            <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <Image 
                  source={emailIcon} 
                  style={styles.inputIcon} 
                  resizeMode="contain"
                />
              </View>
              <TextInput
                style={[styles.input, styles.whiteFont]}
                placeholder="Email"
                value={this.state.email}
                onChangeText={email => this.setState({ email })}
                placeholderTextColor="#FFF" 
              />
            </View>

            <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <Image 
                  source={lockIcon} 
                  style={styles.inputIcon} 
                  resizeMode="contain"
                />
              </View>
              <TextInput
                secureTextEntry
                style={[styles.input, styles.whiteFont]}
                placeholder="Password"
                value={this.state.password}
                onChangeText={password => this.setState({ password })}
                placeholderTextColor="#FFF" 
              />
            </View>

          </View>

          <View style={styles.footerContainer}>

            <TouchableOpacity onPress={this.onButtonPress.bind(this)}>
              <View style={styles.signup}>
                <Text style={styles.whiteFont}>Join</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.signin}>
                <Text style={styles.greyFont}>Already have an account?<Text style={styles.whiteFont}> Sign In</Text></Text>
              </View>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    paddingTop: 30,
    width: null,
    height: null
  },
  headerContainer: {
    flex: 1,
  },
  inputsContainer: {
    flex: 2,
    marginTop: 50,
  },
  footerContainer: {
    flex: 1
  },
  headerIconView: {
    marginLeft: 10,
    backgroundColor: 'transparent'
  },
  headerBackButtonView: {
    width: 25,
    height: 25,
  },
  backButtonIcon: {
    width: 25,
    height: 25
  },
  headerTitleView: {
    backgroundColor: 'transparent',
    marginLeft: 25,
  },
  titleViewText: {
    fontFamily: Fonts.BakeryFont,
    fontSize: 140,
    color: '#fff',
    textAlign: 'center',
    height: 200
  },
  inputs: {
    paddingVertical: 20,
  },
  inputContainer: {
    padding: 10,
    borderWidth: 2,
    borderBottomColor: '#CCC',
    borderColor: 'transparent',
    flexDirection: 'row',
    height: 80,
  },
  iconContainer: {
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputIcon: {
    width: 30,
    height: 30,
  },
  input: {
    flex: 1,
    fontSize: 20,
  },
  signup: {
    backgroundColor: '#FF3366',
    paddingVertical: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  signin: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  greyFont: {
    color: '#D8D8D8'
  },
  whiteFont: {
    color: '#FFF'
  }
});

