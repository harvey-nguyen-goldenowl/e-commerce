import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Star from '@Atom/Star';
import { FONT_SIZE_8, GRAY, LINE_HEIGHT_8 } from '@Style';

const StarList = ({ numberStarActive, numberStar, style, voteNumber }) => {
  const starArray = Array.from(Array(numberStar).keys()).map((item) => {
    return {
      id: item + 1,
      active: item < numberStarActive,
    };
  });

  return (
    <View style={[styles.container, style]}>
      {starArray.map(({ id, active }) => (
        <Star key={id} active={active} />
      ))}
      {!!voteNumber && <Text style={styles.numberVote}> ({voteNumber})</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  numberVote: {
    color: GRAY,
    fontSize: FONT_SIZE_8,
    lineHeight: LINE_HEIGHT_8,
  },
});

StarList.defaultProps = {
  numberStar: 5,
  numberStarActive: 0,
};

StarList.propTypes = {
  numberStar: PropTypes.number,
  numberStarActive: PropTypes.number,
  style: PropTypes.object,
  voteNumber: PropTypes.number,
};

export default StarList;
