import React, { Component } from 'react';
import css from './Button.module.css';

export class Button extends Component {
  render() {
    const { onLoadMore } = this.props;

    return (
      <button className={css.Button} type="button" onClick={onLoadMore}>
        Load more
      </button>
    );
  }
}
