import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements';
import Icon from 'react-native-vector-icons/MaterialIcons';

import AddToFavorite from '@Atom/AddToFavorite';
import Dropdown from '@Atom/Dropdown';
import StarList from '@Molecule/StarList';
import PrimaryButton from '@Atom/PrimaryButton';
import { BLACK, MAIN_BACKGROUND, STAR_OUTLINE, WINDOW_HEIGHT, WINDOW_WIDTH } from '@Style';
import Typography from '@Atom/Typography';
import axios from '@Service/axios';
import Block from '@Organism/Block';
import ProductCardList from '@Organism/ProductCardList';
import BottomModal from '@Atom/BottomModal';
import Tag from '@Atom/Tag';
import { navigateRating } from '@Navigation/navigate';

const linkImage =
  'https://lh3.googleusercontent.com/fife/AAWUweUBDk_9zkM7h2sZQ9lSGMUNwtACNH4KMz9R-LWlyjcYHlZhwfmk1sDDkKyHZc6gtG8RWUgk11kqXXsdQCKpWwp7mgQAvqosZCUeBSHBT-VGtjVJjd0z6HwyEns5-vHmlN8CvbBtKpXaHhoRdWqw-5I_YHls08AKfRvA2O1pqkzg1ZTR6huA_so_bZuK_m6oqFWQWi7YsVJgbxMJ7HusufXxOhyHc6vhre-EGxAVr8yeP6ml4VTjuLq7y_XApGHPgOjmLrWM_DEbJDhhAjjc_bkPMspXll4fH-TOnSlc8ANvRm99KUV8yopka81MDLo8xGlb6L5M9Gf-GZjNkdNlExDow-feXwlVtB5kuViWAxbQTzvHfvjN4seM71SgfWYaHCDYgjQkK2-5k_MtSug2O7MbxGxkV1zWJLVoA97s8gWzETuTpg97Sd7PHc-sG_tjm0XBnzV9x98dXASsrIkQdU7lnXxHh8COZpSySC8kcplFM599W_A0di4gpC50gkI9DuFsd7SZvDM1bOaeV_VrHUek6hrSpARdtLHfDZIfguH3sp2B4cCsc0b1CTASFP4qwj_gQB0-bKpSWq3cwNStbDkeHpuJAZ-HeLpzySPjXRbfmoeF0pw2selX68s1UfL7-ktbVAGNzFL5HqJU2qL1O1lGJ-QL-lpPCpYbECczJdnV0lBl0WtwKi7NdDewRd0d_XDsc6acpLX7_9gytbv5177xuw=s826-w550-h826-no?authuser=0&authuser=0';
const listSize = ['XS', 'S', 'M', 'L', 'XL'];
const DetailProductScreen = ({ navigation }) => {
  const headerHeight = useHeaderHeight();
  const space = (WINDOW_WIDTH - 16 * 2 - 3 * 100) / 2;
  const [isLoading, setIsLoading] = useState(false);
  const [saleProduct, setsaleProduct] = useState([]);
  const [newProduct, setNewProduct] = useState([]);
  const [size, setSize] = useState('Size');
  const [modalVisible, setModalVisible] = useState(false);

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

  const openModalSelectSize = () => {
    setModalVisible(true);
  };
  const goReview = () => {
    navigateRating(navigation);
    // console.log('press');
  };
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <ScrollView style={styles.imageContainer} horizontal showsHorizontalScrollIndicator={false}>
          <Image
            style={styles.image}
            source={{
              uri: linkImage,
            }}
          />
          <Image
            style={styles.image}
            source={{
              uri: linkImage,
            }}
          />
          <Image
            style={styles.image}
            source={{
              uri: linkImage,
            }}
          />
        </ScrollView>
        <View style={{ ...styles.detail, height: WINDOW_HEIGHT * 0.45 - headerHeight }}>
          <View style={styles.action}>
            <Dropdown value={size} title="Size" style={styles.dropdown} onPress={openModalSelectSize} />
            <Dropdown value="Black" style={styles.dropdown} />
            <AddToFavorite active={false} />
          </View>

          <View style={styles.titleContainer}>
            <TouchableOpacity style={styles.headerContent} onPress={goReview}>
              <Text style={styles.title}>H&M</Text>
              <Typography type="subTitle" value="Short black dress" />
              <StarList numberStar={5} numberStarActive={5} voteNumber={10} />
            </TouchableOpacity>
            <Text style={styles.title}>$19.99</Text>
          </View>

          <Text style={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptatem ipsa fugit, autem accusantium
          </Text>
          <PrimaryButton text="ADD TO CART" style={styles.button} />
        </View>
        <View style={styles.support}>
          <Text style={styles.info}>Shipping info</Text>
          <Icon name="chevron-right" />
        </View>
        <View style={styles.support}>
          <Text style={styles.info}>Support</Text>
          <Icon name="chevron-right" />
        </View>
        <View style={styles.recommendContainer}>
          <View style={styles.recommendHeader}>
            <Text style={styles.recommendTitle}>You can also like this</Text>
            <Text>12 items</Text>
          </View>
          <ProductCardList style={styles.productList} data={saleProduct} isLoading={isLoading} />
        </View>
      </ScrollView>

      {modalVisible && (
        <BottomModal
          title="Seclect size"
          closeModal={() => {
            setModalVisible(false);
          }}
        >
          <View style={styles.modalContainer}>
            <View style={styles.list}>
              {listSize.map((item, index) => (
                <Tag
                  key={item}
                  value={item}
                  style={{ marginLeft: index % 3 !== 0 ? space : 0, marginTop: 16, flexBasis: '26%' }}
                  onPress={() => {
                    setSize(item);
                    setModalVisible(false);
                  }}
                />
              ))}
            </View>
          </View>
          <View style={styles.support}>
            <Text style={styles.info}>Size Info</Text>
            <Icon name="chevron-right" />
          </View>
          <View style={styles.modalContainer}>
            <PrimaryButton
              text="Add to cart"
              style={styles.add}
              onPress={() => {
                setModalVisible(false);
              }}
            />
          </View>
        </BottomModal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
  },
  imageContainer: {},
  image: {
    resizeMode: 'stretch',

    width: 275,
    height: 0.55 * WINDOW_HEIGHT,
  },
  detail: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  action: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  dropdown: {
    width: '35%',
  },
  headerContent: {},
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 22,
  },
  title: {
    color: BLACK,
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 29,
  },
  description: {
    marginTop: 16,
  },
  button: { marginBottom: 16 },
  support: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 16,
    borderColor: STAR_OUTLINE,
    borderStyle: 'solid',
    borderWidth: 0.4,
  },
  info: {
    color: BLACK,
    fontSize: 16,
    lineHeight: 16,
  },
  recommendContainer: {
    paddingTop: 24,

    backgroundColor: MAIN_BACKGROUND,
    paddingHorizontal: 16,
  },
  recommendHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  recommendTitle: {
    color: BLACK,
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 22,
  },
  productList: {
    marginTop: 12,
    marginBottom: 90,
  },
  modalContainer: {
    width: '100%',
    padding: 16,
  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',

    justifyContent: 'flex-start',
    width: '100%',
  },
  add: {
    width: '100%',
  },
});

export default DetailProductScreen;
