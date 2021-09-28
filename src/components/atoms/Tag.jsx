import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { Colors } from '@Style';

const Tag = ({ style, type, size, value }) => {
  const active = type === 'active';
  if (size === 'small')
    return (
      <View style={[styles.smallContainer, active ? styles.smallActive : undefined, style]}>
        <Text style={[styles.text, active ? styles.activeText : undefined]}>{value}</Text>
      </View>
    );

  return (
    <View style={[styles.ordinaryContainer, active ? styles.ordinaryActive : undefined, style]}>
      <Text style={[styles.text, active ? styles.activeText : undefined]}>{value}</Text>
    </View>
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
    backgroundColor: Colors.BLACK,
  },
  text: {
    fontSize: 14,
    lineHeight: 20,
  },
  activeText: {
    color: Colors.WHITE,
  },
  ordinaryContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 40,
    borderColor: Colors.STAR_OUTLINE,
    borderStyle: 'solid',
    borderWidth: 0.4,

    borderRadius: 8,

    backgroundColor: Colors.WHITE,
  },
  ordinaryActive: {
    color: Colors.WHITE,

    backgroundColor: Colors.PRIMARY,
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
};

export default Tag;
