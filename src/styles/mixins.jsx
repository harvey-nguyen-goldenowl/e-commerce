import { Dimensions, PixelRatio } from 'react-native';

export const WINDOW_WIDTH = Dimensions.get('window').width;
const guidelineBaseWidth = 375;

export const scaleSize = (/** @type {number} */ size) => (WINDOW_WIDTH / guidelineBaseWidth) * size;

export const scaleFont = (/** @type {number} */ size) => size * PixelRatio.getFontScale();

const dimensions = (
  /** @type {number} */ top,
  right = top,
  bottom = top,
  left = right,
  /** @type {string} */ property,
) => {
  const styles = {};

  styles[`${property}Top`] = top;
  styles[`${property}Right`] = right;
  styles[`${property}Bottom`] = bottom;
  styles[`${property}Left`] = left;

  return styles;
};

export const margin = (
  /** @type {number} */ top,
  /** @type {number | undefined} */ right,
  /** @type {number | undefined} */ bottom,
  /** @type {number | undefined} */ left,
) => dimensions(top, right, bottom, left, 'margin');

export const padding = (
  /** @type {number} */ top,
  /** @type {number | undefined} */ right,
  /** @type {number | undefined} */ bottom,
  /** @type {number | undefined} */ left,
) => dimensions(top, right, bottom, left, 'padding');

export const boxShadow = (/** @type {string} */ color, height = 2, width = 2, radius = 8, opacity = 0.2) => {
  return {
    shadowColor: color,
    shadowOffset: {
      height,
      width,
    },
    shadowOpacity: opacity,
    shadowRadius: radius,
    elevation: radius,
  };
};
