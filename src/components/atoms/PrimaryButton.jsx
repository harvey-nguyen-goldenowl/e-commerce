import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

import { Colors } from '@Style';

const PrimaryButton = ({ text, onPress }) => (
  <View style={styles.container}>
    <TouchableHighlight onPress={onPress} style={styles.button} activeOpacity={0.9} underlayColor={Colors.GREEN}>
      <Text style={styles.text}>{text}</Text>
    </TouchableHighlight>
  </View>
);
const styles = StyleSheet.create({
  container: {
    height: 48,
    borderRadius: 25,
    overflow: 'hidden',

    backgroundColor: Colors.PRIMARY,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    color: Colors.WHITE,

    backgroundColor: Colors.PRIMARY,
  },
  text: {
    color: Colors.WHITE,
    fontSize: 14,
    lineHeight: 20,
    textTransform: 'uppercase',
  },
});

PrimaryButton.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
};

export default PrimaryButton;
