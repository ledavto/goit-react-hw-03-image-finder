import { Component } from 'react';

export class Searchbar extends Component {
  state = {
    string: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(e.target.searchInput.value);
  };

  render() {
    return (
      <header className="searchbar">
        <form className="searchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="searchForm-button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="searchForm-input"
            type="text"
            name="searchInput"
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
