import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { Colors } from '@Style';

import ProductCardList from './ProductCardList';

const Block = ({ title, subtitle, style, data, isLoading }) => (
  <View style={[styles.container, style]}>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.view}> View all</Text>
    </View>
    <Text style={styles.subTitle}>{subtitle}</Text>
    <ProductCardList style={styles.productList} data={data} isLoading={isLoading} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 26,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    fontWeight: 'bold',
  },
  title: {
    color: Colors.BLACK,
    fontSize: 34,
    lineHeight: 34,
  },
  view: {
    color: Colors.BLACK,
    fontSize: 11,
    lineHeight: 11,
  },
  subTitle: {
    marginTop: 4,

    color: Colors.GRAY,
    fontSize: 11,
    lineHeight: 11,
  },
  productList: {
    marginTop: 22,
  },
});

Block.defaultProps = {};

Block.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  style: PropTypes.object,
  data: PropTypes.array,
  isLoading: PropTypes.bool,
};

export default Block;
