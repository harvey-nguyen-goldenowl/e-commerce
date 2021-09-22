export const navigateLoginScreen = (/** @type {{ navigate: (route: string) => void; }} */ navigation) => {
  navigation.navigate('login');
};
export const navigateMainScreen = (
  /** @type {{ reset: (options: { index: number; routes: { name: string; }[]; }) => void; }} */ navigation,
) => {
  navigation.reset({
    index: 0,
    routes: [{ name: 'main' }],
  });
};

export const navigateForgotPasswordScreen = (/** @type {{ navigate: (route: string) => void; }} */ navigation) => {
  navigation.navigate('forgotPassword');
};
