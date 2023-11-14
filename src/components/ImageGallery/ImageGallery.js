import React, { Component } from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export class ImageGallery extends Component {
  render() {
    const { images, onImageClick } = this.props;
    return (
      <ul className="ImageGallery">
        {images.map(image => (
          <ImageGalleryItem
            key={image.id}
            imageUrl={image.webformatURL}
            onImageClick={() => onImageClick(image.largeImageURL)}
          />
        ))}
      </ul>
    );
  }
}
