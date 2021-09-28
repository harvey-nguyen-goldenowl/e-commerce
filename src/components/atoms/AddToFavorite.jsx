import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { StyleSheet, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Colors, Font, Mixins, Space } from '@Style';

const AddToFavorite = ({ active, onPress, style }) => {
  const [pressed, setPressed] = useState(false);
  const onPressIn = () => {
    setPressed(true);
  };
  const onPressOut = () => {
    setPressed(false);
  };
  if (!active)
    return (
      <TouchableHighlight
        style={[styles.container, style]}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        onPress={onPress}
        underlayColor={Colors.PRIMARY}
      >
        <Icon
          name={pressed ? 'heart' : 'heart-outline'}
          size={Font.FONT_SIZE_12}
          color={pressed ? Colors.WHITE : Colors.FAVORITE_OUTLINE}
        />
      </TouchableHighlight>
    );

  return (
    <TouchableHighlight
      style={[styles.container, style]}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={onPress}
      underlayColor={Colors.PRIMARY}
    >
      <Icon name="heart" size={Font.FONT_SIZE_12} color={pressed ? Colors.WHITE : Colors.PRIMARY} />
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: Space.SCALE_36,
    height: Space.SCALE_36,
    borderRadius: Space.SCALE_18,

    backgroundColor: Colors.WHITE,
    ...Mixins.boxShadow(Colors.WHITE, 0, Space.SCALE_4, Space.SCALE_4, 0.08),
  },
});

AddToFavorite.defaultProps = {
  active: true,
};

AddToFavorite.propTypes = {
  active: PropTypes.bool,
  onPress: PropTypes.func,
  style: PropTypes.object,
};

export default AddToFavorite;
