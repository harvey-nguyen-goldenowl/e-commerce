import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { BLACK, FONT_SIZE_18, LINE_HEIGHT_22, MAIN_BACKGROUND, SCALE_16, SCALE_36 } from '@Style';

const HeaderShopNavigation = ({ navigation, options }) => {
  const onGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Icon name="arrow-back-ios" size={FONT_SIZE_18} onPress={onGoBack} />
      <Text style={styles.title}>{options.title}</Text>
      <Icon name="search" size={FONT_SIZE_18} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 56,
    paddingHorizontal: SCALE_16,

    backgroundColor: MAIN_BACKGROUND,
  },
  title: {
    color: BLACK,
    fontWeight: 'bold',
    fontSize: FONT_SIZE_18,
    lineHeight: LINE_HEIGHT_22,
  },
});

HeaderShopNavigation.defaultProps = {};

HeaderShopNavigation.propTypes = {
  navigation: PropTypes.object,
  options: PropTypes.object,
};

export default HeaderShopNavigation;
