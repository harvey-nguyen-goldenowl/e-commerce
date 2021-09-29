import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { FONT_SIZE_12, STAR, STAR_OUTLINE } from '@Style';

const Star = ({ active, size }) => {
  if (!active) return <Icon name="star-outline" size={size} color={STAR_OUTLINE} />;
  return <Icon name="star" size={size} color={STAR} />;
};

const styles = StyleSheet.create({
  container: {},
});

Star.defaultProps = {
  size: FONT_SIZE_12,
  active: true,
};

Star.propTypes = {
  size: PropTypes.number,
  active: PropTypes.bool,
};

export default Star;
