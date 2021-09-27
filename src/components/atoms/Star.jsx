import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Colors, Font } from '@Style';

const Star = ({ active, size }) => {
  if (!active) return <Icon name="star-outline" size={size} color={Colors.STAR_OUTLINE} />;
  return <Icon name="star" size={size} color={Colors.STAR} />;
};

const styles = StyleSheet.create({
  container: {},
});

Star.defaultProps = {
  size: Font.FONT_SIZE_12,
  active: true,
};

Star.propTypes = {
  size: PropTypes.number,
  active: PropTypes.bool,
};

export default Star;
