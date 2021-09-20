import React from 'react';
import { Animated, StyleSheet, TextInput, View } from 'react-native';

import { Colors } from '@Style';

const TextField = () => {
  const [fontSize] = React.useState(new Animated.Value(20));
  const [marginTop] = React.useState(new Animated.Value(22));

  const onFocus = () => {
    Animated.parallel([
      Animated.timing(fontSize, {
        toValue: 11,
        duration: 200,
        useNativeDriver: false,
      }),
      Animated.timing(marginTop, {
        toValue: 14,
        duration: 200,
        useNativeDriver: false,
      }),
    ]).start();
  };
  const onBlur = () => {
    Animated.parallel([
      Animated.timing(fontSize, {
        toValue: 20,
        duration: 200,
        useNativeDriver: false,
      }),
      Animated.timing(marginTop, {
        toValue: 22,
        duration: 200,
        useNativeDriver: false,
      }),
    ]).start();
  };
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} onFocus={onFocus} onBlur={onBlur} />
      <Animated.Text style={{ ...styles.title, fontSize, top: marginTop }} onPress={onFocus}>
        Name
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',

    width: '100%',
    height: 64,

    backgroundColor: Colors.WHITE,
  },
  input: {
    height: '100%',
  },
  title: {
    position: 'absolute',
    left: 20,

    height: 20,

    color: Colors.GRAY,
  },
});

export default TextField;
