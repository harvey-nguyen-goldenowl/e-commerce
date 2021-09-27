import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { Colors } from '@Style';

const SaleLabel = ({ value, style }) => (
  <View style={[styles.container, style]}>
    <Text style={styles.text}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    width: 40,
    height: 24,
    padding: 6,
    borderRadius: 29,

    backgroundColor: Colors.PRIMARY,
  },
  text: {
    color: Colors.WHITE,
    fontSize: 11,
    lineHeight: 11,
  },
});

SaleLabel.defaultProps = {};

SaleLabel.propTypes = {
  value: PropTypes.string,
  style: PropTypes.object,
};

export default SaleLabel;
