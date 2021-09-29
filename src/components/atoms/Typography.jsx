import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { BLACK } from '@Style';

const Typography = ({ value, type, style, onPress }) => (
  <View style={{ ...styles.container, ...style }}>
    <Text style={styles[type]} onPress={onPress}>
      {value}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {},
  headline: {
    color: BLACK,
    fontWeight: 'bold',
    fontSize: 34,
    lineHeight: 34,
  },
  text: {
    fontSize: 14,
    lineHeight: 20,
  },
});

Typography.propTypes = {
  value: PropTypes.string,
  type: PropTypes.oneOf(['headline', 'text']),
  style: PropTypes.object,
  onPress: PropTypes.func,
};

export default Typography;
