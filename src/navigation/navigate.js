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

export const navigateDetailProduct = (
  /** @type {{ navigate: (route: string, arg1: { screen: string; params: { id: any; }; }) => void; }} */ navigation,
  /** @type {any} */ id,
) => {
  navigation.navigate('product-nav', {
    screen: 'detail',
    params: {
      id,
    },
  });
};
export const navigateRating = (
  /** @type {{ navigate: (route: string, arg1: { screen: string; params: { id: any; }; }) => void; }} */ navigation,
  /** @type {any} */ id,
) => {
  navigation.navigate('product-nav', {
    screen: 'rating',
    params: {
      id,
    },
  });
};
