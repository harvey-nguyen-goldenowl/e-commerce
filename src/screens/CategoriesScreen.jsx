import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

import PrimaryButton from '@Atom/PrimaryButton';
import { Space } from '@Style';

const data = [
  { id: '1', title: 'Tops' },
  { id: '2', title: 'Shirts & Blouses' },
  { id: '3', title: 'Cardigans & Sweaters' },
  { id: '4', title: 'Knitwear' },
  { id: '5', title: 'Blazers' },
  { id: '6', title: 'Outerwear' },
  { id: '7', title: 'Pants' },
  { id: '8', title: 'Jeans' },
  { id: '9', title: 'Shorts' },
  { id: '10', title: 'Skirts' },
  { id: '11', title: 'Dresses' },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
const renderItem = ({ item }) => <Item title={item.title} />;
const CategoriesScreen = ({ navigation }) => (
  <View style={styles.container}>
    <PrimaryButton text="view all items" />
    <Text style={styles.choose}>choose category</Text>
    <FlatList data={data} renderItem={renderItem} keyExtractor={(item) => item.id} />
  </View>
);

const styles = StyleSheet.create({
  item: {},
  title: {},
  container: {
    flex: 1,
    paddingHorizontal: Space.SCALE_16,

    marginTop: Space.SCALE_16,
  },
  choose: {},
});

export default CategoriesScreen;
