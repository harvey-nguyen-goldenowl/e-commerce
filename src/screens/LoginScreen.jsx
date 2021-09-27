import { useFormik } from 'formik';
import React from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Yup from 'yup';

import PrimaryButton from '@Atom/PrimaryButton';
import SocialButton from '@Atom/SocialButton';
import TextField from '@Atom/TextField';
import Typography from '@Atom/Typography';
import { Colors, Font, Space } from '@Style';
import { navigateForgotPasswordScreen, navigateMainScreen } from '@Navigation/navigate';

export const validationSchema = Yup.object().shape({
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
  email: '',
  password: '',
};

const inputList = [
  {
    name: 'email',
    secureTextEntry: false,
  },
  {
    name: 'password',
    secureTextEntry: true,
  },
];

const LoginScreen = ({ navigation }) => {
  const { values, handleChange, errors, touched, setFieldTouched } = useFormik({
    initialValues,
    onSubmit: (parameters) => {
      console.log('submit');
    },
    validationSchema,
    validateOnChange: true,
  });
  const navigateMain = () => {
    navigateMainScreen(navigation);
  };
  const navigateForgotPassword = () => {
    navigateForgotPasswordScreen(navigation);
  };
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <View>
        <Typography value="Login" style={styles.header} type="headline" />
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
          <Typography
            value="Forgot your password?"
            type="text"
            style={styles.spaceSmallRight}
            onPress={navigateForgotPassword}
          />
          <Icon
            name="long-arrow-right"
            size={Font.FONT_SIZE_20}
            color={Colors.PRIMARY}
            onPress={navigateForgotPassword}
          />
        </View>
        <PrimaryButton text="login" onPress={navigateMain} />
      </View>
      <View style={styles.footer}>
        <View style={styles.center}>
          <Typography value="Or sign up with social account" type="text" />
        </View>
        <View style={styles.social}>
          <SocialButton style={styles.spaceRight} />
          <SocialButton type="facebook" />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',

    padding: Space.SCALE_16,

    backgroundColor: Colors.MAIN_BACKGROUND,
  },
  header: {
    marginTop: '10%',
    marginBottom: '8%',
  },
  space: {
    marginBottom: Space.SCALE_8,
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: Space.SCALE_24,
  },
  center: {
    alignItems: 'center',
    marginBottom: Space.SCALE_12,
  },
  social: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  spaceRight: {
    marginRight: Space.SCALE_16,
  },
  spaceSmallRight: {
    marginRight: Space.SCALE_8,
  },
  footer: {
    marginBottom: Space.SCALE_32,
  },
});

export default LoginScreen;
