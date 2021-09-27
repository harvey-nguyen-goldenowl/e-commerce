import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import Star from '@Atom/Star';

const StarList = ({ numberStar, style }) => {
  const starArray = Array.from(Array(5).keys()).map((item) => {
    return {
      id: item + 1,
      active: item < numberStar,
    };
  });

  return (
    <View style={[styles.container, style]}>
      {starArray.map(({ id, active }) => (
        <Star key={id} active={active} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

StarList.defaultProps = {
  numberStar: 0,
};

StarList.propTypes = {
  numberStar: PropTypes.number,
  style: PropTypes.object,
};

export default StarList;
