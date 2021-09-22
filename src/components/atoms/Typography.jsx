import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Colors } from '@Style';

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
    color: Colors.BLACK,
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
  type: PropTypes.string,
  style: PropTypes.object,
  onPress: PropTypes.func,
};

export default Typography;
