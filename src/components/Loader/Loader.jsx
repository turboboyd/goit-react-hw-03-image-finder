import { MagnifyingGlass } from 'react-loader-spinner';
import css from './Loader.module.css';
import PropTypes from 'prop-types';

export const Loader = () => {
  return (
    <div className={css.loader}>
      <MagnifyingGlass
        visible={true}
        height="100"
        width="100"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="#c0efff"
        color="#3f51b5"
      />
    </div>
  );
};

MagnifyingGlass.propTypes = {
  visible: PropTypes.bool.isRequired,
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  wrapperStyle: PropTypes.object.isRequired,
  wrapperClass: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  glassColor: PropTypes.string.isRequired,
};

// fetchImages = (name, page, key) => {
//   this.setState({ loading: true });

//   fetch(
//     `https://pixabay.com/api/?q=${name}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
//   )
//     .then(res => {
//       if (res.ok) {
//         return res.json();
//       }
//       return Promise.reject(new Error('Пусто 2'));
//     })
//     .then(data => {
//       this.setState({
//         imagesSearch: data.hits, // Append new images to the existing imagesSearch
//         status: 'resolved',
//         loading: false,
//       });
//     })
//     .catch(error =>
//       this.setState({ error, status: 'rejected', loading: false })
//     );
// };
