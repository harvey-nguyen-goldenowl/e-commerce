import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, FlatList, ActivityIndicator } from 'react-native';

import axios from '@Service/axios';

import ProductCard from './ProductCard';

const renderItem = ({ item }) => <ProductCard {...item} />;
const ProductCardList = ({ style }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get('/fashion/product');
        setData(res.data.listProduct);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, []);

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
};

export default ProductCardList;
