import React, { Component } from 'react';

export class ImageGalleryItem extends Component {
  render() {
    const { imageUrl, onImageClick } = this.props;
    return (
      <li className="ImageGalleryItem" onClick={onImageClick}>
        <img className="ImageGalleryItemImage" src={imageUrl} alt="" />
      </li>
    );
  }
}
