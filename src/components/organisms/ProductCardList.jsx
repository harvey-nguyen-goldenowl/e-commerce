import PropTypes from 'prop-types';
import React from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';

import ProductCard from './ProductCard';

const renderItem = ({ item }) => <ProductCard {...item} />;
const ProductCardList = ({ style, data, isLoading }) => {
  if (isLoading) return <ActivityIndicator style={styles.loading} size="large" />;

  return (
    <View style={[styles.container, style]}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        ItemSeparatorComponent={() => <View style={{ width: 26 }} />}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {},
});

ProductCardList.defaultProps = {};

ProductCardList.propTypes = {
  style: PropTypes.object,
  data: PropTypes.array,
  isLoading: PropTypes.bool,
};

export default ProductCardList;
