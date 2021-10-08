import React from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';

import { boxShadow, PRIMARY, SCALE_18, SCALE_36 } from '@Style';

const AddToBag = () => (
  <TouchableHighlight style={{ ...styles.container }}>
    <Text>Add</Text>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: SCALE_36,
    height: SCALE_36,
    borderRadius: SCALE_18,

    backgroundColor: PRIMARY,
    opacity: 0.9,
    ...boxShadow('#DB30222', 0, 4, 4, 0.16),
  },
});

AddToBag.propTypes = {};

export default AddToBag;
