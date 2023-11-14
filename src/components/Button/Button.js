import React, { Component } from 'react';

export class Button extends Component {
  render() {
    const { onLoadMore } = this.props;

    return (
      <button className="Button" type="button" onClick={onLoadMore}>
        Load more
      </button>
    );
  }
}
