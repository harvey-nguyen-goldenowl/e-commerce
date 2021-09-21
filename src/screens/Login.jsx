import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Colors } from '@Style';
import TextField from '@Atom/TextField';
import Typography from '@Atom/Typography';
import PrimaryButton from '@Atom/PrimaryButton';
import SocialButton from '@Atom/SocialButton';

export const validationSchema = Yup.object().shape({
  name: Yup.string().required('name is required'),
  email: Yup.string().required('email is required').email('email invalid'),
  password: Yup.string()
    .required('password is required')
    .min(8, 'password at least 8 character')
    .max(15, 'password at most 15 character')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,15}$/,
      'password have at least 1 lower character, 1 upper character, 1 number',
    ),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const inputList = [
  {
    name: 'name',
    secureTextEntry: false,
  },
  {
    name: 'email',
    secureTextEntry: false,
  },
  {
    name: 'password',
    secureTextEntry: true,
  },
];

const Login = () => {
  const { values, handleChange, errors, touched, setFieldTouched } = useFormik({
    initialValues,
    onSubmit: (parameters) => {
      console.log('submit');
    },
    validationSchema,
    validateOnChange: true,
  });
  return (
    <View style={styles.container}>
      <Typography value="Sign up" style={styles.header} type="headline" />
      {inputList.map(({ name, secureTextEntry }) => (
        <TextField
          key={name}
          value={values[name]}
          name={name}
          handleChange={handleChange}
          style={styles.space}
          type={!touched[name] ? undefined : errors[name] ? 'error' : 'success'}
          handleBlur={setFieldTouched}
          error={errors[name]}
          secureTextEntry={secureTextEntry}
        />
      ))}
      <View style={styles.right}>
        <Typography value="Already have an account?" type="text" style={styles.space} />
      </View>
      <PrimaryButton text="Sign up" />
      <View style={styles.center}>
        <Typography value="Or sign up with social account" type="text" />
      </View>
      <SocialButton />
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
  header: {
    marginTop: '10%',
    marginBottom: '8%',
  },
  space: {
    marginBottom: 8,
  },
  right: {
    alignItems: 'flex-end',
  },
  center: {
    alignItems: 'center',
  },
});

export default Login;
