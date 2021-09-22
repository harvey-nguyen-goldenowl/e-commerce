import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, TouchableHighlight, View } from 'react-native';

import { Colors } from '@Style';
import GoogleIcon from '@Icon/google.svg';
import FacebookIcon from '@Icon/facebook.svg';

const SocialButton = ({ type, style }) => {
  const Icon = type === 'google' ? GoogleIcon : FacebookIcon;
  return (
    <View style={[styles.container, style]}>
      <TouchableHighlight style={styles.button}>
        <Icon width={24} height={24} />
      </TouchableHighlight>
    </View>
  );
};

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

SocialButton.defaultProps = {
  type: 'google',
};

SocialButton.propTypes = {
  type: PropTypes.string,
  style: PropTypes.object,
};

export default SocialButton;
