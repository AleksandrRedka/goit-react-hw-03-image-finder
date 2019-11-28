import React from 'react';
import PropTypes from 'prop-types';
import styles from './Gallery.module.css';

const Gallery = ({ photo, openModal, loadMore }) => {
  return (
    <div className={styles.wrapperGallery}>
      <ul className={styles.gallery}>
        {photo.map(item => (
          <li className={styles.photoCard} key={item.id}>
            <img src={item.webFormat} alt={item.tags} />

            <div className={styles.stats}>
              <p className={styles.statsItem}>
                <i className="material-icons">thumb_up</i>
                {item.likes}
              </p>
              <p className={styles.statsItem}>
                <i className="material-icons">visibility</i>
                {item.views}
              </p>
              <p className={styles.statsItem}>
                <i className="material-icons">comment</i>
                {item.coments}
              </p>
              <p className={styles.statsItem}>
                <i className="material-icons">cloud_download</i>
                {item.downloads}
              </p>
            </div>
            <button
              type="button"
              className={styles.fullScreenButton}
              onClick={() => openModal(item.id)}
            >
              <i className="material-icons">zoom_out_map</i>
            </button>
          </li>
        ))}
      </ul>
      <button className={styles.loadMore} type="button" onClick={loadMore}>
        Load More
      </button>
    </div>
  );
};

Gallery.propTypes = {
  photo: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webFormat: PropTypes.string.isRequired,
      largeFormat: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      tags: PropTypes.string.isRequired,
      comments: PropTypes.number.isRequired,
      downloads: PropTypes.number.isRequired,
    }),
  ).isRequired,
  openModal: PropTypes.func.isRequired,
  loadMore: PropTypes.func.isRequired,
};

export default Gallery;
