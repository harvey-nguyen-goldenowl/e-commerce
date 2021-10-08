import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ActivityIndicator, FlatList } from 'react-native';

import Header from '@Organism/Header';
import axios from '@Service/axios';
import ProductCard from '@Organism/ProductCard';
import { MAIN_BACKGROUND } from '@Style';

const FavoriteScreen = ({ navigation }) => {
  const renderItem = ({ item }) => <ProductCard {...item} type="favorite" horizontal navigation={navigation} />;
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [idSort, setIdSort] = useState('4');
  useEffect(() => {
    setIsLoading(true);
    axios
      .get('/fashion/catalog')
      .then((res) => {
        setData(res.data.catalog);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <View style={styles.container}>
      <Header />
      {isLoading ? (
        <ActivityIndicator style={styles.loading} size="large" />
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
          style={styles.body}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 1,
    padding: 16,

    backgroundColor: MAIN_BACKGROUND,
  },
});

export default FavoriteScreen;
