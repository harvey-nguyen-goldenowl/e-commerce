import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import StarList from '@Molecule/StarList';
import AddToFavorite from '@Atom/AddToFavorite';
import { Colors, Font, Space } from '@Style';
import SaleLabel from '@Atom/SaleLabel';

const ProductCard = ({ sourceImage, favorite, starNumber, voteNumber, brandName, productName, oldPrice, newPrice }) => (
  <View style={styles.container}>
    <View style={styles.imageContainer}>
      <Image
        source={{
          uri: sourceImage,
        }}
        style={styles.image}
      />
      <AddToFavorite style={styles.favoriteButton} active={favorite} />
      <SaleLabel value="-20%" style={styles.label} />
    </View>
    <View style={styles.starContainer}>
      <StarList numberStar={starNumber} style={styles.starList} />
      <Text style={styles.numberVote}> ({voteNumber})</Text>
    </View>
    <Text style={styles.brandName}>{brandName}</Text>
    <Text style={styles.productName}>{productName}</Text>
    <View style={styles.priceContainer}>
      <Text style={styles.oldPrice}>{oldPrice}</Text>
      <Text style={styles.newPrice}>{newPrice}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {},
  imageContainer: {
    width: 148,
    height: 184,
  },
  image: {
    position: 'relative',

    width: '100%',
    height: '100%',
  },
  favoriteButton: {
    position: 'absolute',
    right: 0,
    bottom: 0,

    transform: [{ translateY: Space.SCALE_18 }],
  },
  label: {
    position: 'absolute',
    top: Space.SCALE_8,
    left: Space.SCALE_8,
  },
  starContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: Space.SCALE_8,
  },
  starList: {
    alignSelf: 'flex-start',
  },
  numberVote: {
    color: Colors.GRAY,
    fontSize: Font.FONT_SIZE_8,
    lineHeight: Font.LINE_HEIGHT_8,
  },
  brandName: {
    marginTop: Space.SCALE_8,

    color: Colors.STAR_OUTLINE,
    fontSize: Font.FONT_SIZE_11,
    lineHeight: Font.LINE_HEIGHT_11,
  },
  productName: {
    marginTop: Space.SCALE_4,

    color: Colors.BLACK,
    fontSize: Font.FONT_SIZE_16,
    lineHeight: Font.LINE_HEIGHT_16,
  },
  priceContainer: {
    flexDirection: 'row',
  },
  oldPrice: {
    marginRight: Space.SCALE_6,

    color: Colors.STAR_OUTLINE,
    fontSize: Font.FONT_SIZE_14,
    lineHeight: Font.LINE_HEIGHT_20,
    textDecorationLine: 'line-through',
  },
  newPrice: {
    color: Colors.PRIMARY,
    fontSize: Font.FONT_SIZE_14,
    lineHeight: Font.LINE_HEIGHT_20,
  },
});

ProductCard.defaultProps = {};

ProductCard.propTypes = {
  sourceImage: PropTypes.string,
  favorite: PropTypes.bool,
  starNumber: PropTypes.number,
  voteNumber: PropTypes.number,
  brandName: PropTypes.string,
  productName: PropTypes.string,
  oldPrice: PropTypes.string,
  newPrice: PropTypes.string,
};

export default ProductCard;
