import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

import BottomModal from '@Atom/BottomModal';
import ProductCard from '@Organism/ProductCard';
import axios from '@Service/axios';
import { BLACK, boxShadow, GREEN, MAIN_BACKGROUND, PRIMARY, SCALE_12, SCALE_32, SCALE_8, WHITE } from '@Style';
import Header from '@Organism/Header';

const sortByList = [
  { id: '1', title: 'Popular' },
  { id: '2', title: 'Newest' },
  { id: '3', title: 'Customer review' },
  { id: '4', title: 'Price: lowest to high' },
  { id: '5', title: 'Price: highest to low' },
];

const CatalogScreen = ({ navigation }) => {
  const renderItem = ({ item }) => <ProductCard {...item} horizontal navigation={navigation} />;
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

  const chooseSortBy = (/** @type {React.SetStateAction<string>} */ id) => {
    setIdSort(id);
  };
  const closeModal = () => {
    setModalVisible(false);
  };
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

      <BottomModal show={modalVisible} closeModal={closeModal} title="Sort by">
        <ScrollView
          style={styles.list}
          contentContainerStyle={{ alignItems: 'flex-start', flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
        >
          {sortByList.map(({ id, title }) => (
            <TouchableHighlight
              underlayColor={GREEN}
              style={[styles.block, id === idSort && styles.selected]}
              key={id}
              onPress={() => {
                chooseSortBy(id);
                closeModal();
              }}
            >
              <Text style={[styles.textOption, id === idSort && styles.textSelect]}>{title}</Text>
            </TouchableHighlight>
          ))}
        </ScrollView>
      </BottomModal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: SCALE_32,

    backgroundColor: WHITE,
  },
  header: {
    ...boxShadow(WHITE, 0, 4, 12, 0.12),
  },
  title: {
    marginLeft: 14,
  },
  tagList: {
    flexDirection: 'row',
    marginTop: SCALE_12,
    marginLeft: 16,
  },
  tag: {
    marginRight: SCALE_8,
  },
  actionBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 24,
    marginTop: 18,
    marginBottom: 10,
    paddingHorizontal: 16,

    backgroundColor: MAIN_BACKGROUND,
  },
  filter: {
    flexDirection: 'row',
  },
  icon: {
    height: '100%',
  },
  textIcon: {
    marginLeft: 11,
  },
  price: { flexDirection: 'row' },
  view: { flexDirection: 'row' },
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
  list: {
    width: '100%',
    marginTop: 32,
  },
  block: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%',
    padding: 16,

    backgroundColor: WHITE,
  },
  selected: { backgroundColor: PRIMARY },
  textOption: { color: BLACK, fontSize: 16, lineHeight: 16 },
  textSelect: {
    color: WHITE,
  },
});

export default CatalogScreen;
