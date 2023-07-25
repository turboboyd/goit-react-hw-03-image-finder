import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css'



export const ImageGalleryItem = ({ imagesAnswer }) => {
  console.log('imagesAnswer: ', imagesAnswer);
  return (
    <ul className={css.ImageGallery}>
      {imagesAnswer &&
        imagesAnswer.map(
          ({ id, largeImageURL, previewHeight, previewWidth, tags }) => (
            <li className={css.ImageGalleryItem} key={id}>
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
};

