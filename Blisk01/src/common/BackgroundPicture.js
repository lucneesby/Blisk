import React, { Component } from 'react';
import { ImageBackground, View, Text, Image, StyleSheet } from 'react-native';

const background = require('./signup_bg.png');

export default class BackgroundPicture extends Component {
		render() {
			return (
				<View style={styles.container}>
					<ImageBackground 
						source={background} resizeMode='cover' 
						style={[styles.container, styles.bg]} 
					/>
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
  }
});

