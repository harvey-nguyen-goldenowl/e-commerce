import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet } from 'react-native';

import Block from '@Organism/Block';
import { WINDOW_WIDTH } from '@Style';
import axios from '@Service/axios';
import Dropdown from '@Atom/Dropdown';

const HomeScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [saleProduct, setsaleProduct] = useState([]);
  const [newProduct, setNewProduct] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get('/fashion/product')
      .then((res) => {
        setsaleProduct(res.data.sale);
        setNewProduct(res.data.new);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Image source={require('@Image/banner.png')} style={styles.banner} />
      {/* <Block
        style={styles.saleBlock}
        title="Sale"
        subtitle="Super summer sale"
        data={saleProduct}
        isLoading={isLoading}
      />
      <Block
        style={styles.saleBlock}
        title="New"
        subtitle="You’ve never seen it before!"
        data={newProduct}
        isLoading={isLoading}
      /> */}
      <Dropdown unSelect />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    width: WINDOW_WIDTH,
    height: undefined,
    aspectRatio: 3 / 2,
  },
  saleBlock: {
    marginTop: 32,
  },
});

export default HomeScreen;
