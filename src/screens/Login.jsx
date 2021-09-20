import { useFormik } from 'formik';
import React from 'react';
import { Animated, StyleSheet, Text, TextInput, View } from 'react-native';

import { Colors } from '@Style';
import TextField from '@Atom/TextField';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const Login = () => {
  const { values, handleChange } = useFormik({
    initialValues,
    onSubmit: (parameters) => {
      console.log('submit');
    },
  });
  return (
    <View style={styles.container}>
      <TextField />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',

    padding: 16,

    backgroundColor: Colors.MAIN_BACKGROUND,
  },
});

export default Login;
