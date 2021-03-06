import React from 'react';
import './AddMovie.css';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      storyline: '',
      imagePath: '',
      rating: 0,
      genre: 'action',
    };

    this.onClickAddMovie = this.onClickAddMovie.bind(this);
  }

  onClickAddMovie() {
    const { onClick } = this.props;
    const {
      title,
      subtitle,
      storyline,
      imagePath,
      rating,
      genre,
    } = this.state;
    const newMovie = {
      title,
      subtitle,
      storyline,
      imagePath,
      rating,
      genre,
    };
    onClick(newMovie);
    this.resetForm();
  }


  resetForm() {
    this.setState({
      title: '',
      subtitle: '',
      storyline: '',
      imagePath: '',
      rating: 0,
      genre: 'action',
    });
  }

  renderTitleInput() {
    const { title } = this.state;
    return (
      <label htmlFor="title">
        <p>Título</p>
        <input
          type="text"
          id="title"
          className="oneLineInputs"
          placeholder="Insira aqui o título do Filme"
          name="title"
          value={title}
          onChange={(event) => this.setState({ title: event.target.value })}
        />
      </label>
    );
  }

  renderSubtitleInput() {
    const { subtitle } = this.state;
    return (
      <label htmlFor="subtitle">
        <p>Subtítulo</p>
        <input
          type="text"
          id="subtitle"
          className="oneLineInputs"
          placeholder="Insira aqui o subtítulo do Filme"
          name="subtitle"
          value={subtitle}
          onChange={(event) => this.setState({ subtitle: event.target.value })}
        />
      </label>
    );
  }

  renderImageInput() {
    const { imagePath } = this.state;
    return (
      <label htmlFor="imagem">
        <p>Imagem</p>
        <input
          type="text"
          id="image"
          className="oneLineInputs"
          placeholder="Insira aqui a URL de uma imagem"
          name="image"
          value={imagePath}
          onChange={(event) => {
            this.setState({ imagePath: event.target.value });
          }}
        />
      </label>
    );
  }

  renderStorylineInput() {
    const { storyline } = this.state;
    return (
      <label htmlFor="storyline">
        <p>Sinopse</p>
        <textarea
          type="text"
          id="storyline"
          className="storylineInput"
          name="storyline"
          value={storyline}
          onChange={(event) => this.setState({ storyline: event.target.value })}
        />
      </label>
    );
  }

  renderRatingInput() {
    const { rating } = this.state;
    return (
      <label htmlFor="rating">
        <p className="endingLabels">Avaliação</p>
        <input
          type="number"
          id="rating"
          className="ratingInput"
          name="rating"
          value={rating}
          min="0"
          max="5"
          onChange={(event) => this.setState({ rating: Number(event.target.value) })}
        />
      </label>
    );
  }

  renderGenreInput() {
    const { genre } = this.state;
    return (
      <label htmlFor="genre">
        <p className="endingLabels">Gênero</p>
        <select
          name="genre"
          id="genre"
          value={genre}
          onChange={(event) => this.setState({ genre: event.target.value })}
        >
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    return (
      <form className="addForm">
        {this.renderTitleInput()}
        <br />
        {this.renderSubtitleInput()}
        <br />
        {this.renderImageInput()}
        <br />
        {this.renderStorylineInput()}
        <br />
        <div className="endingInputs">
        {this.renderRatingInput()}
        {this.renderGenreInput()}
        <button
          id="addButton"
          className="addBtn"
          type="button"
          onClick={this.onClickAddMovie}
        >
          Adicionar filme
        </button>
        </div>
      </form>
    );
  }
}

export default AddMovie;
