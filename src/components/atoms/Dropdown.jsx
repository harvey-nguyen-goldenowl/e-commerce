import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { ORANGE, STAR_OUTLINE, WHITE } from '@Style';

const Dropdown = ({ title, value, style, onPress }) => (
  <TouchableOpacity style={[styles.container, title === value && styles.nonSelect, style]} onPress={onPress}>
    <Text>{value}</Text>
    <Icon name="chevron-down" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 100,
    height: 40,
    paddingHorizontal: 12,
    borderColor: STAR_OUTLINE,
    borderStyle: 'solid',
    borderWidth: 0.4,
    borderRadius: 8,

    backgroundColor: WHITE,
  },
  nonSelect: { borderColor: ORANGE },
});

Dropdown.defaultProps = {
  title: '',
};

Dropdown.propTypes = {
  style: PropTypes.object,
  title: PropTypes.string,
  value: PropTypes.string,
  onPress: PropTypes.func,
};

export default Dropdown;
