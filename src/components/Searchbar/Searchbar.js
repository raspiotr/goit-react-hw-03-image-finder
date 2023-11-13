import React, { Component } from 'react';

export class Searchbar extends Component {
  render() {
    return (
      <header class="Searchbar">
        <form class="SearchForm">
          <button type="submit" class="SearchFormButton">
            <span class="SearchFormButtonLabel">Search</span>
          </button>

          <input
            class="SearchFormInput"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
