import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

import { GREEN, PRIMARY, WHITE } from '@Style';

const PrimaryButton = ({ text, onPress, style }) => (
  <View style={[styles.container, style]}>
    <TouchableHighlight onPress={onPress} style={styles.button} activeOpacity={0.9} underlayColor={GREEN}>
      <Text style={styles.text}>{text}</Text>
    </TouchableHighlight>
  </View>
);
const styles = StyleSheet.create({
  container: {
    height: 48,
    borderRadius: 25,
    overflow: 'hidden',

    backgroundColor: PRIMARY,
    opacity: 0.9,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    color: WHITE,
  },
  text: {
    color: WHITE,
    fontSize: 14,
    lineHeight: 20,
    textTransform: 'uppercase',
  },
});

PrimaryButton.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
  style: PropTypes.object,
};

export default PrimaryButton;
