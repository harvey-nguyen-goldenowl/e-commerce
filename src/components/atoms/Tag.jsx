import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import { BLACK, PRIMARY, STAR_OUTLINE, WHITE } from '@Style';

const Tag = ({ style, type, size, value, onPress }) => {
  const active = type === 'active';
  const small = size === 'small';
  return small ? (
    <TouchableOpacity style={[styles.smallContainer, active && styles.smallActive, style]} onPress={onPress}>
      <Text style={[styles.text, active && styles.activeText]}>{value}</Text>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity style={[styles.ordinaryContainer, active && styles.ordinaryActive, style]} onPress={onPress}>
      <Text style={[styles.text, active && styles.activeText]}>{value}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  smallContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 30,
    borderRadius: 29,

    backgroundColor: 'transparent',
  },
  smallActive: {
    backgroundColor: BLACK,
  },
  text: {
    fontSize: 14,
    lineHeight: 20,
  },
  activeText: {
    color: WHITE,
  },
  ordinaryContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 40,
    borderColor: STAR_OUTLINE,
    borderStyle: 'solid',
    borderWidth: 0.4,

    borderRadius: 8,

    backgroundColor: WHITE,
  },
  ordinaryActive: {
    color: WHITE,

    backgroundColor: PRIMARY,
  },
});

Tag.defaultProps = {
  type: 'inactive',
  size: 'ordinary',
  value: 'Tag',
};

Tag.propTypes = {
  style: PropTypes.object,
  type: PropTypes.string,
  size: PropTypes.string,
  value: PropTypes.string,
  onPress: PropTypes.func,
};

export default Tag;
