import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import Tag from '@Atom/Tag';
import Typography from '@Atom/Typography';
import { Colors, Mixins, Space } from '@Style';
import ProductCard from '@Organism/ProductCard';
import axios from '@Service/axios';

const tagList = [
  { id: '1', title: 'T-shirts' },
  { id: '2', title: 'Crop tops' },
  { id: '3', title: 'Sleeveless' },
  { id: '4', title: 'Shirts' },
];

const renderItem = ({ item }) => <ProductCard {...item} horizontal />;
const CatalogScreen = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
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
      <View style={styles.header}>
        <Typography value="Women’s tops" type="headline" style={styles.title} />

        <ScrollView style={styles.tagList} horizontal showsHorizontalScrollIndicator={false}>
          {tagList.map(({ id, title }) => (
            <Tag value={title} size="small" type="active" style={styles.tag} key={id} />
          ))}
        </ScrollView>

        <View style={styles.actionBar}>
          <View style={styles.filter}>
            <Icon name="filter" style={styles.icon} size={24} />
            <Text style={styles.textIcon}>Filters</Text>
          </View>
          <View style={styles.price}>
            <MaterialIcon name="swap-vertical" style={styles.icon} size={24} />
            <Text style={styles.textIcon}>Price: lowest to high</Text>
          </View>
          <View style={styles.view}>
            <MaterialIcon name="view-module" style={styles.icon} size={24} />
          </View>
        </View>
      </View>

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
    paddingTop: Space.SCALE_32,

    backgroundColor: Colors.WHITE,
  },
  header: {
    ...Mixins.boxShadow(Colors.WHITE, 0, 4, 12, 0.12),
  },
  title: {
    marginLeft: 14,
  },
  tagList: {
    flexDirection: 'row',
    marginTop: Space.SCALE_12,
    marginLeft: 16,
  },
  tag: {
    marginRight: Space.SCALE_8,
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

    backgroundColor: Colors.MAIN_BACKGROUND,
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

    backgroundColor: Colors.MAIN_BACKGROUND,
  },
});

export default CatalogScreen;
