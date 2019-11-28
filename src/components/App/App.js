import React, { Component } from 'react';
import './App.module.css';
import SearchForm from '../SearchForm/SearchForm';
import Gallery from '../Gallery/Gallery';
import Loader from '../Loader/Loader';
import Modal from '../Modal/Modal';
import * as galleryAPI from '../../services/gallery-api';

const mapper = photo => {
  return photo.map(
    ({ webformatURL: webFormat, largeImageURL: largeFormat, ...props }) => ({
      webFormat,
      largeFormat,
      ...props,
    }),
  );
};

export default class App extends Component {
  state = {
    searchValue: '',
    photo: [],
    page: 1,
    activeImgUrl: '',
    isLoading: false,
    openModal: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { photo } = this.state;
    if (prevState.photo !== photo && photo.length > 12) {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  fetchPhoto() {
    const { searchValue, page } = this.state;
    this.setState({ isLoading: true });
    galleryAPI
      .fetchGallery(searchValue, page)
      .then(({ data }) =>
        this.setState(state => {
          return {
            photo: [...state.photo.concat(mapper(data.hits))],
            page: state.page + 1,
          };
        }),
      )
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  }

  handleSubmitForm = e => {
    e.preventDefault();
    this.setState({ photo: [] });
    this.fetchPhoto();
  };

  handleChangeForm = e => {
    e.preventDefault();
    return this.setState({ searchValue: e.target.value });
  };

  handleLoadMore = e => {
    e.preventDefault();
    this.fetchPhoto();
  };

  handleOpenModal = id => {
    const { photo } = this.state;
    const { largeFormat } = photo.find(item => item.id === id);
    this.setState({ openModal: true, activeImgUrl: largeFormat });
  };

  handleCloseModal = e => {
    if (e.target.localName !== 'img') {
      this.setState({ openModal: false, activeImgUrl: '' });
    }
  };

  render() {
    const {
      photo,
      searchValue,
      activeImgUrl,
      isLoading,
      openModal,
      error,
    } = this.state;
    return (
      <div>
        {error && <p>error.messege</p>}
        <SearchForm
          searchValue={searchValue}
          onChange={this.handleChangeForm}
          onSearch={this.handleSubmitForm}
        />
        {isLoading && <Loader />}
        {photo.length > 0 && (
          <Gallery
            photo={photo}
            openModal={this.handleOpenModal}
            loadMore={this.handleLoadMore}
          />
        )}
        {openModal && (
          <Modal activeImg={activeImgUrl} closeModal={this.handleCloseModal} />
        )}
      </div>
    );
  }
}
