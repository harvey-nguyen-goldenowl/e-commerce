import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { BLACK, FONT_REGULAR, GRAY } from '@Style';

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
    fontSize: 34,
    ...FONT_REGULAR,
    lineHeight: 34,
  },
  subTitle: {
    color: GRAY,
    fontSize: 11,
    lineHeight: 11,
  },
  text: {
    fontSize: 14,
    lineHeight: 20,
  },
});

Typography.propTypes = {
  value: PropTypes.string,
  type: PropTypes.oneOf(['headline', 'text', 'subTitle']),
  style: PropTypes.object,
  onPress: PropTypes.func,
};

export default Typography;
