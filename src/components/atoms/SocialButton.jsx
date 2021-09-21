import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

import { Colors } from '@Style';
// import googleImage from '@Icon/google.svg';

const SocialButton = ({ image }) => (
  <View style={styles.container}>
    <TouchableHighlight style={styles.button}>
      <Text>Social</Text>
    </TouchableHighlight>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: 92,
    height: 64,
    borderRadius: 24,

    backgroundColor: Colors.WHITE,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

SocialButton.propTypes = {
  image: PropTypes.string,
};

export default SocialButton;
