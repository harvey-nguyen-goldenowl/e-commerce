import PropTypes from 'prop-types';
import React from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { BLACK, boxShadow, DROPDOWN, GRAY, MAIN_BACKGROUND, WHITE } from '@Style';

const BottomModal = ({ children, title, show, closeModal, style, height }) => (
  <View style={[styles.container, style]}>
    <Modal
      animationType="fade"
      transparent={true}
      visible={show}
      onRequestClose={() => {
        closeModal();
      }}
    >
      <TouchableOpacity style={styles.modal} onPress={closeModal}>
        <View style={{ ...styles.option, height: `${height}%` }}>
          <View style={styles.bar} />
          <Text style={styles.title}>{title}</Text>
          {children}
        </View>
      </TouchableOpacity>
    </Modal>
  </View>
);
const styles = StyleSheet.create({
  container: {},
  modal: {
    flex: 1,
    justifyContent: 'flex-end',
    borderWidth: 1,

    backgroundColor: DROPDOWN,
  },
  option: {
    alignItems: 'center',
    width: '100%',
    borderTopLeftRadius: 34,
    borderTopRightRadius: 34,

    backgroundColor: MAIN_BACKGROUND,
    opacity: 1,
    ...boxShadow(WHITE, 0, -4, 30, 0.08),
  },
  bar: {
    width: 60,
    height: 6,
    marginTop: 14,
    borderRadius: 3,

    backgroundColor: GRAY,
  },
  title: {
    marginTop: 16,

    color: BLACK,
    fontSize: 18,
    lineHeight: 22,
  },
});

BottomModal.defaultProps = {
  height: 45,
};

BottomModal.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  title: PropTypes.string,
  show: PropTypes.bool,
  closeModal: PropTypes.func,
  height: PropTypes.number,
};

export default BottomModal;
