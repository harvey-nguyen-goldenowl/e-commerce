import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';

import AddToFavorite from '@Atom/AddToFavorite';
import Dropdown from '@Atom/Dropdown';
import StarList from '@Molecule/StarList';
import PrimaryButton from '@Atom/PrimaryButton';

const linkImage =
  'https://lh3.googleusercontent.com/fife/AAWUweUBDk_9zkM7h2sZQ9lSGMUNwtACNH4KMz9R-LWlyjcYHlZhwfmk1sDDkKyHZc6gtG8RWUgk11kqXXsdQCKpWwp7mgQAvqosZCUeBSHBT-VGtjVJjd0z6HwyEns5-vHmlN8CvbBtKpXaHhoRdWqw-5I_YHls08AKfRvA2O1pqkzg1ZTR6huA_so_bZuK_m6oqFWQWi7YsVJgbxMJ7HusufXxOhyHc6vhre-EGxAVr8yeP6ml4VTjuLq7y_XApGHPgOjmLrWM_DEbJDhhAjjc_bkPMspXll4fH-TOnSlc8ANvRm99KUV8yopka81MDLo8xGlb6L5M9Gf-GZjNkdNlExDow-feXwlVtB5kuViWAxbQTzvHfvjN4seM71SgfWYaHCDYgjQkK2-5k_MtSug2O7MbxGxkV1zWJLVoA97s8gWzETuTpg97Sd7PHc-sG_tjm0XBnzV9x98dXASsrIkQdU7lnXxHh8COZpSySC8kcplFM599W_A0di4gpC50gkI9DuFsd7SZvDM1bOaeV_VrHUek6hrSpARdtLHfDZIfguH3sp2B4cCsc0b1CTASFP4qwj_gQB0-bKpSWq3cwNStbDkeHpuJAZ-HeLpzySPjXRbfmoeF0pw2selX68s1UfL7-ktbVAGNzFL5HqJU2qL1O1lGJ-QL-lpPCpYbECczJdnV0lBl0WtwKi7NdDewRd0d_XDsc6acpLX7_9gytbv5177xuw=s826-w550-h826-no?authuser=0&authuser=0';
const DetailProductScreen = ({ navigation }) => (
  <ScrollView style={styles.container}>
    <Image
      style={styles.image}
      source={{
        uri: linkImage,
      }}
    />

    <View style={styles.action}>
      <Dropdown value="Size" title="Size" style={styles.dropdown} />
      <Dropdown value="Black" style={styles.dropdown} />
      <AddToFavorite active={false} />
    </View>

    <View style={styles.title}>
      <Text>H&M</Text>
      <Text>$19.99</Text>
    </View>

    <Text>Short black dress</Text>
    <StarList numberStar={5} />
    <Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam unde esse pariatur voluptatum sequi dolore ut
      necessitatibus itaque. Sit, architecto? Consectetur ipsam quas autem ullam vitae ut sint quis incidunt!
    </Text>
    <PrimaryButton text="ADD TO CART" />
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    resizeMode: 'stretch',

    width: 275,
    height: 413,
  },
  action: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 12,
  },
  dropdown: {
    width: '35%',
  },
});

export default DetailProductScreen;
