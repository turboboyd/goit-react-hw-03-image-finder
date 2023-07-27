import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css'; // Импортируйте стили для компонента (или используйте свои стили)

class Modal extends Component {
  static propTypes = {
    imageUrl: PropTypes.string.isRequired, // Пропс imageUrl для передачи URL большого изображения
    onClose: PropTypes.func.isRequired, // Пропс onClose - функция для закрытия модального окна
  };

  componentDidMount() {
    // Добавляем слушатель события для закрытия модального окна по нажатию клавиши ESC
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    // Удаляем слушатель события при размонтировании компонента
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    // Закрываем модальное окно по нажатию клавиши ESC
    if (event.key === 'Escape') {
      this.props.onClose();
    }
  };

  handleOverlayClick = event => {
    // Закрываем модальное окно по клику на оверлее
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { imageUrl } = this.props;

    return (
      <div className={css.Overlay} onClick={this.handleOverlayClick}>
        <div className={css.Modal}>
          <img className={css.imageUrl} src={imageUrl} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;
