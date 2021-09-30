import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import AddToFavorite from '@Atom/AddToFavorite';
import SaleLabel from '@Atom/SaleLabel';
import StarList from '@Molecule/StarList';
import {
  BLACK,
  boxShadow,
  FONT_SIZE_11,
  FONT_SIZE_14,
  FONT_SIZE_16,
  LINE_HEIGHT_11,
  LINE_HEIGHT_16,
  LINE_HEIGHT_20,
  PRIMARY,
  SCALE_10,
  SCALE_18,
  SCALE_4,
  SCALE_6,
  SCALE_8,
  STAR_OUTLINE,
  WHITE,
} from '@Style';
import Typography from '@Atom/Typography';

const ProductCard = ({
  sourceImage,
  favorite,
  starNumber,
  voteNumber,
  brandName,
  productName,
  oldPrice,
  newPrice,
  horizontal,
}) => {
  const navigation = useNavigation();
  const navigateDetail = () => {
    // @ts-ignore
    navigation.navigate('product-nav', { screen: 'detail' });
  };
  if (horizontal)
    return (
      <TouchableOpacity style={styles.spaceBottom} onPress={navigateDetail}>
        <View style={styles.horizontalContainer}>
          <View style={styles.horizontalImageContainer}>
            <Image
              source={{
                uri: sourceImage,
              }}
              style={[styles.image, styles.horizontalImage]}
            />
            {/* <SaleLabel value="-20%" style={styles.horizontalLabel} /> */}
          </View>
          <View style={styles.horizontalContent}>
            <Text style={styles.productName}>{productName}</Text>
            <Typography type="subTitle" value={brandName} style={styles.brandName} />
            <View style={styles.starContainer}>
              <StarList numberStar={starNumber} style={styles.starList} voteNumber={voteNumber} />
            </View>
            <View style={styles.priceContainer}>
              <Text style={styles.oldPrice}>{oldPrice}</Text>
              <Text style={styles.newPrice}>{newPrice}</Text>
            </View>
            <AddToFavorite style={styles.horizontalFavoriteButton} active={favorite} />
          </View>
        </View>
      </TouchableOpacity>
    );

  return (
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
        <StarList numberStar={starNumber} style={styles.starList} voteNumber={voteNumber} />
      </View>
      <Typography type="subTitle" value={brandName} style={styles.brandName} />
      <Text style={styles.productName}>{productName}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.oldPrice}>{oldPrice}</Text>
        <Text style={styles.newPrice}>{newPrice}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  spaceBottom: {
    height: 120,

    backgroundColor: 'transparent',
  },
  horizontalContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 110,
    borderRadius: 8,
    overflow: 'visible',

    backgroundColor: WHITE,
    ...boxShadow(WHITE, 0, 1, 25, 0.08),
  },
  horizontalImageContainer: {
    justifyContent: 'flex-start',
    width: 104,
  },
  image: {
    position: 'relative',

    width: '100%',
    height: '100%',
  },
  horizontalImage: {
    resizeMode: 'stretch',
    aspectRatio: 1 / 1,
  },
  horizontalLabel: {},
  horizontalContent: {
    position: 'relative',

    flex: 1,
    paddingLeft: 12,
  },
  productName: {
    marginTop: SCALE_4,

    color: BLACK,
    fontSize: FONT_SIZE_16,
    lineHeight: LINE_HEIGHT_16,
  },
  brandName: {
    marginTop: SCALE_8,
  },
  starContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: SCALE_8,
  },
  starList: {
    alignSelf: 'flex-start',
  },
  priceContainer: {
    flexDirection: 'row',
  },
  oldPrice: {
    marginRight: SCALE_6,

    color: STAR_OUTLINE,
    fontSize: FONT_SIZE_14,
    lineHeight: LINE_HEIGHT_20,
    textDecorationLine: 'line-through',
  },
  newPrice: {
    color: PRIMARY,
    fontSize: FONT_SIZE_14,
    lineHeight: LINE_HEIGHT_20,
  },
  horizontalFavoriteButton: {
    position: 'absolute',
    right: 0,
    bottom: 0,

    transform: [{ translateY: SCALE_10 }],
  },
  container: {},
  imageContainer: {
    width: 148,
    height: 184,
  },
  favoriteButton: {
    position: 'absolute',
    right: 0,
    bottom: 0,

    transform: [{ translateY: SCALE_18 }],
  },
  label: {
    position: 'absolute',
    top: SCALE_8,
    left: SCALE_8,
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
  horizontal: PropTypes.bool,
};

export default ProductCard;
