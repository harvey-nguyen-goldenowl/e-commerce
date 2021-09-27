import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

import { Colors, Mixins, Space } from '@Style';

const boxShadow = Mixins.boxShadow('#DB30222', 0, 4, 4, 0.16);

const AddToBag = () => (
  <TouchableHighlight style={{ ...styles.container, ...boxShadow }}>
    <Text>Add</Text>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: Space.SCALE_36,
    height: Space.SCALE_36,
    borderRadius: Space.SCALE_18,

    backgroundColor: Colors.PRIMARY,
    opacity: 0.9,
  },
});

AddToBag.propTypes = {};

export default AddToBag;
