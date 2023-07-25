import React, { Component } from 'react';



export class ImageGallery extends Component {
  state = {
    images: null,
    page: 1,
    loding: false,

  }
  
  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.searchName;
    const newName = this.props.searchName;
    if (prevName !== newName) {
      const KEY = '37071230-d6b04d3068f1a0950a5b376a5';
      const page = this.state.page;
      const name = newName.searchName;
      this.setState({ loding: true });
      fetch(
        `https://pixabay.com/api/?q=${name}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(res => res.json())
        .then(data => this.setState({ images: data.hits }))
        .finally(() => this.setState({ loding: false }));
    }
  }

  render() {

    const imagesAnswer = this.state.images;
    console.log('imagesAnswer: ', imagesAnswer);
    return (
      <ul className="gallery">
        {imagesAnswer &&
          imagesAnswer.map(
            ({ id, largeImageURL, previewHeight, previewWidth, tags }) => (
              <li  key={id}>
                <img
                  width={previewWidth}
                  height={previewHeight}
                  src={largeImageURL}
                  alt={tags}
                />
              </li>
            )
          )}
        
      </ul>
    );

  }
}





//   handleSubmit = () => {
    
//   }







//   userRequest = dataUser => {
//     const searchName = dataUser.searchName;
//     console.log('searchName: ', searchName);
//     this.setState({ searchName: searchName });
//     this.API(searchName);
//   };

//   API = name => {
//     const KEY = '37071230-d6b04d3068f1a0950a5b376a5';
//     const page = this.state.page;
//     this.setState({ loding: true });
//     fetch(
//       `https://pixabay.com/api/?q=${name}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
//     )
//       .then(res => res.json())
//       .then(data => this.setState({ images: data.hits }))
//       .finally(() => this.setState({ loding: false }));
//   };

//   render() {
//     const imagesAnswer = this.state.images;
//     console.log('imagesAnswer: ', imagesAnswer);
//     return (
//       <div>
//         <Searchbar onSubmit={this.userRequest} />
//         <div>
//           {imagesAnswer &&
//             imagesAnswer.map(
//               ({ id, largeImageURL, previewHeight, previewWidth, tags }) => (
//                 <li className="gallery-item" key={id}>
//                   <img
//                     width={previewWidth}
//                     height={previewHeight}
//                     src={largeImageURL}
//                     alt={tags}
//                   />
//                 </li>
//               )
//             )}
//         </div>
//       </div>
//     );
//   }
// }