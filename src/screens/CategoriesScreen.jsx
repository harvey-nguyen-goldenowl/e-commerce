import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

import PrimaryButton from '@Atom/PrimaryButton';
import { Colors, Space } from '@Style';

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
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      style={styles.categories}
      ItemSeparatorComponent={() => <View style={styles.separate} />}
    />
  </View>
);

const styles = StyleSheet.create({
  item: {},
  title: {
    color: Colors.BLACK,
    fontSize: 16,
    lineHeight: 16,
  },
  container: {
    flex: 1,
    paddingHorizontal: Space.SCALE_16,

    marginTop: Space.SCALE_16,
  },
  choose: {
    marginTop: 16,

    color: Colors.GRAY,
    fontSize: 14,
    lineHeight: 20,
  },
  categories: {
    marginTop: 32,
  },
  separate: {
    borderColor: Colors.STAR_OUTLINE,
    borderStyle: 'solid',
    borderWidth: 0.4,

    opacity: 0.25,
    marginVertical: 16,
  },
});

export default CategoriesScreen;
