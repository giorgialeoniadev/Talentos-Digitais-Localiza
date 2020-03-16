import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  inputText(searchText) {
    const { onSearchTextChange } = this.props;
    return (
      <label htmlFor="InputText">
        <p>Pesquise aqui</p>
        <input
          type="text"
          id="InputText"
          className="searchInput"
          name="InputText"
          value={searchText}
          onChange={onSearchTextChange}
        />
      </label>
    );
  }

  checkbox() {
    const { onBookmarkedChange, bookmarkedOnly } = this.props;
    return (
      <label htmlFor="InputCheck">
        <input
          type="checkbox"
          id="InputCheck"
          checked={bookmarkedOnly}
          onChange={onBookmarkedChange}
        />
        <p>Mostrar somente favoritos</p>
      </label>
    );
  }

  select() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <div>
        <label htmlFor="select">
          <p>Filtrar por gênero</p>
          <select name="select" id="select" className="genreSel" value={selectedGenre} onChange={onSelectedGenreChange}>
            <option value="">Todos</option>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
      </div>
    );
  }


  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.props;
    return (
      <div className="searchForm">
        <form>
          {this.inputText(searchText)}
          <br />
          {this.checkbox(bookmarkedOnly)}
          <br />
          {this.select(selectedGenre)}
        </form>
      </div>
    );
  }
}

export default SearchBar;
