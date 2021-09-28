import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Colors, Font, Space } from '@Style';

const HeaderShopNavigation = ({ navigation, options }) => {
  const onGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Icon name="arrow-back-ios" size={Font.FONT_SIZE_18} onPress={onGoBack} />
      <Text style={styles.title}>{options.title}</Text>
      <Icon name="search" size={Font.FONT_SIZE_18} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: Space.SCALE_36,
    paddingHorizontal: Space.SCALE_16,

    backgroundColor: Colors.MAIN_BACKGROUND,
  },
  title: {
    color: Colors.BLACK,
    fontWeight: 'bold',
    fontSize: Font.FONT_SIZE_18,
    lineHeight: Font.LINE_HEIGHT_22,
  },
});

HeaderShopNavigation.defaultProps = {};

HeaderShopNavigation.propTypes = {
  navigation: PropTypes.object,
  options: PropTypes.object,
};

export default HeaderShopNavigation;
