import React from 'react';
import { Image, ScrollView, StyleSheet } from 'react-native';

import Block from '@Organism/Block';
import { Mixins } from '@Style';

const HomeScreen = ({ navigation }) => (
  <ScrollView style={styles.container}>
    <Image source={require('@Image/banner.png')} style={styles.banner} />
    <Block style={styles.saleBlock} title="Sale" subtitle="Super summer sale" />
    <Block style={styles.saleBlock} title="Sale" subtitle="Super summer sale" />
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    width: '100%',
    height: (Mixins.WINDOW_WIDTH / 3) * 2,
  },
  saleBlock: {
    marginTop: 32,
  },
});

export default HomeScreen;
