// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import { BACKEND } from '@env';

const devEnvironmentVariables = {
  BACKEND,
};
const prodEnvironmentVariables = {
  BACKEND,
};

export default __DEV__ ? devEnvironmentVariables : prodEnvironmentVariables;
