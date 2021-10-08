import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Animated, StyleSheet, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import { GRAY, GREEN, ORANGE, WHITE } from '@Style';

const TextField = ({ value, handleChange, style, name, secureTextEntry, type, error, handleBlur }) => {
  // Hook states
  const [fontSize] = useState(new Animated.Value(14));
  const [lineHeight] = useState(new Animated.Value(20));
  const [height, setHeight] = useState(0);
  const [top, setTop] = useState(new Animated.Value(height / 5));

  // Constants
  const animation = (
    /** @type {number} */ fontSizeValue,
    /** @type {number} */ lineHeightValue,
    /** @type {number} */ topValue,
  ) => {
    Animated.parallel([
      Animated.timing(fontSize, {
        toValue: fontSizeValue,
        duration: 200,
        useNativeDriver: false,
      }),
      Animated.timing(lineHeight, {
        toValue: lineHeightValue,
        duration: 200,
        useNativeDriver: false,
      }),
      Animated.timing(top, {
        toValue: topValue,
        duration: 200,
        useNativeDriver: false,
      }),
    ]).start();
  };
  // Action handlers
  const focusHandle = () => {
    animation(11, 11, height / 5);
  };
  const blurHandle = () => {
    handleBlur(name, true);
    console.log(value);
    if (value) animation(11, 11, height / 5);
    else animation(14, 20, height / 3);
  };
  const layoutHandle = (/** @type {{ nativeEvent: { layout: { height: any; }; }; }} */ event) => {
    const { height: textHeight } = event.nativeEvent.layout;
    setHeight(textHeight);
    setTop(new Animated.Value(textHeight / 3));
  };

  // Renderers
  let icon = null;
  const hasError = type === 'error';
  if (type === 'success')
    icon = <Icon name="check" size={20} color={GREEN} style={{ ...styles.check, transform: [{ translateY: -10 }] }} />;
  if (hasError)
    icon = <Icon name="close" size={20} color={ORANGE} style={{ ...styles.check, transform: [{ translateY: -10 }] }} />;

  return (
    <View style={{ ...styles.container, ...style }}>
      <View style={{ ...styles.inputContainer }}>
        <TextInput
          style={{
            ...styles.textInput,
            paddingTop: height / 3,
            borderColor: hasError ? ORANGE : undefined,
            borderWidth: hasError ? 1 : undefined,
          }}
          onFocus={focusHandle}
          onBlur={blurHandle}
          onLayout={layoutHandle}
          onChangeText={handleChange(name)}
          value={value}
          secureTextEntry={secureTextEntry}
        />
        <Animated.Text
          style={{ ...styles.label, fontSize, lineHeight, top, color: hasError ? ORANGE : GRAY }}
          onPress={focusHandle}
        >
          {name}
        </Animated.Text>
        {icon}
      </View>
      <Text style={{ ...styles.errorText, height: hasError ? undefined : 0 }}>{hasError ? error : null}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
  },
  inputContainer: {
    position: 'relative',

    width: '100%',
    height: 64,
  },
  textInput: {
    height: '100%',
    paddingLeft: 20,

    borderRadius: 4,

    fontSize: 14,

    backgroundColor: WHITE,
  },
  label: {
    position: 'absolute',
    left: 20,

    height: 20,

    color: GRAY,
    textTransform: 'capitalize',
  },
  check: {
    position: 'absolute',
    top: '50%',
    right: 20,
  },
  errorText: {
    marginTop: 4,
    marginBottom: 4,

    paddingLeft: 20,

    color: ORANGE,

    fontSize: 11,
    lineHeight: 11,
    textTransform: 'capitalize',
  },
});

TextField.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
  style: PropTypes.object,
  name: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  type: PropTypes.string,
  error: PropTypes.string,
  handleBlur: PropTypes.func,
};

export default TextField;
