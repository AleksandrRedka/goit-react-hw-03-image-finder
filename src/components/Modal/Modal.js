import React from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

const Modal = ({ activeImg, closeModal }) => {
  return (
    <div className={styles.overlay} onClick={closeModal} role="presentation">
      <div className={styles.modal}>
        {!activeImg ? (
          <span className={styles.textNotFound}>
            {' '}
            Sorry, but large image not found
          </span>
        ) : (
          <img src={activeImg} alt="pictures" />
        )}
      </div>
      <button className={styles.closeBtn} type="button" onClick={closeModal}>
        close
      </button>
    </div>
  );
};

Modal.propTypes = {
  activeImg: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
