import React from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

const Modal = ({ activeImg, closeModal }) => {
  return (
    <div className={styles.overlay} onClick={closeModal} role="presentation">
      <div className={styles.modal}>
        <img src={activeImg} alt="pictures" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  activeImg: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
