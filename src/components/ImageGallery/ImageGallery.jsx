import React, { Component } from 'react';
import css from './ImageGallery.module.css';
import API from '../../servises/api-images.js';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import Modal from '../Modal/Modal';

export class ImageGallery extends Component {
  state = {
    searchName: '',
    images: [], // Initialize images as an empty array
    page: 1,
    loading: false,
    error: null,
    status: 'idle',
    showButton: false,
    showModal: false, // Добавьте поле showModal для отслеживания состояния модального окна
    selectedImageUrl: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.searchName.searchName;
    const newName = this.props.searchName.searchName;
    if (prevName !== newName) {
      this.setState({ status: 'pending' });
      const page = 1;
      setTimeout(() => {
        API.fetchImages(newName, page)
          .then(newImages => {
            console.log(newImages);
            this.setState({
              images: newImages.hits,
              page: page + 1,
              status: 'resolved',
              loading: false,
              showButton: true,
            });
            if (Math.ceil(newImages.totalHits / 12) === page) {
              this.setState({
                showButton: false,
              });
            }
          })
          .catch(error =>
            this.setState({ error, status: 'rejected', loading: false })
          );
      }, 1000);
    }
  }

  handleLoadMore = () => {
    const page = this.state.page;
    console.log('page: ', page);
    const name = this.props.searchName.searchName;
    API.fetchImages(name, page)
      .then(newImages => {
        this.setState({
          images: [...this.state.images, ...newImages.hits],
          page: page + 1,
          status: 'resolved',
          loading: false,
        });
        if (Math.ceil(newImages.totalHits / 12) === page) {
          this.setState({
            showButton: false,
          });
        }
      })
      .catch(error =>
        this.setState({ error, status: 'rejected', loading: false })
      );
  };

  openModal = imageUrl => {
    console.log('imageUrl: ', imageUrl);
    console.log(this.state.showModal);
    
    this.setState({ showModal: true, selectedImageUrl: imageUrl });
  };

  closeModal = () => {
    this.setState({ showModal: false, selectedImageUrl: '' });
  };

  render() {
    const { images, status, showButton, showModal, selectedImageUrl } =
      this.state;

    if (status === 'pending') {
      return <Loader />;
    }

    if (status === 'rejected') {
      return <div>Все плохо</div>;
    }

    if (status === 'resolved') {
      return (
        <>
          <ul className={css.ImageGallery}>
            {images.map(({ id, largeImageURL, tags }) => (
              <ImageGalleryItem
                key={id}
                src={largeImageURL}
                alt={tags}
                onClick={() => this.openModal(largeImageURL)}
              />
            ))}
          </ul>
          {showButton && (
            <Button onClick={this.handleLoadMore}>Load more</Button>
          )}

          {showModal && ( // Вставьте компонент Modal, если showModal true
            <Modal imageUrl={selectedImageUrl} onClose={this.closeModal} />
          )}
        </>
      );
    }

    return null;
  }
}
