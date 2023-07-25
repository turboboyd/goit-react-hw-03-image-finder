import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
// import {ImageGalleryItem} from './ImageGalleryItem'

export class App extends Component {
  state = {
    searchName: '',
    images: null,
    page: 1,
    loding: false,
  };

  handleSubmit = searchName => {
    this.setState({ searchName});
  };

  // API = name => {
  //   const KEY = '37071230-d6b04d3068f1a0950a5b376a5';
  //   const page = this.state.page;
  //   this.setState({ loding: true });
  //   fetch(
  //     `https://pixabay.com/api/?q=${name}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  //   )
  //     .then(res => res.json())
  //     .then(data => this.setState({ images: data.hits }))
  //     .finally(() => this.setState({ loding: false }));
  // };

  render() {
    const imagesAnswer = this.state.images;
    console.log('imagesAnswer: ', imagesAnswer);
    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery searchName={this.state.searchName}>

        </ImageGallery>
      </div>
    );
  }
}
