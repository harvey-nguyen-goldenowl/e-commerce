import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { StyleSheet, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { boxShadow, FAVORITE_OUTLINE, FONT_SIZE_12, PRIMARY, SCALE_18, SCALE_36, SCALE_4, WHITE } from '@Style';

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
        underlayColor={PRIMARY}
      >
        <Icon
          name={pressed ? 'heart' : 'heart-outline'}
          size={FONT_SIZE_12}
          color={pressed ? WHITE : FAVORITE_OUTLINE}
        />
      </TouchableHighlight>
    );

  return (
    <TouchableHighlight
      style={[styles.container, style]}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={onPress}
      underlayColor={PRIMARY}
    >
      <Icon name="heart" size={FONT_SIZE_12} color={pressed ? WHITE : PRIMARY} />
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: SCALE_36,
    height: SCALE_36,
    borderRadius: SCALE_18,

    backgroundColor: WHITE,
    ...boxShadow(WHITE, 0, SCALE_4, SCALE_4, 0.08),
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
