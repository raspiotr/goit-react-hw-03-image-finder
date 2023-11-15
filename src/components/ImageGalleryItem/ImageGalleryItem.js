import React, { Component } from 'react';
import css from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  render() {
    const { imageUrl, imageTags, onImageClick } = this.props;
    return (
      <li className={css.ImageGalleryItem} ref={this.props.forwardRef}>
        <img
          className={css.ImageGalleryItemImage}
          src={imageUrl}
          alt={imageTags}
          onClick={onImageClick}
        />
      </li>
    );
  }
}
