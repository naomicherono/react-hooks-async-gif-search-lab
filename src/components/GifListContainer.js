import React, { Component } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

class GifListContainer extends Component {
  state = {
    gifs: []
  };

  componentDidMount() {
    this.fetchGifs('dolphin'); // Default search term
  }

  fetchGifs = (query) => {
    const API_KEY = 'GqUYGtZsvfmQIqHvbpTbrBNTTCcb9zWK'; // Replace with your Giphy API key
    const url = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${API_KEY}&rating=g`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const firstThreeGifs = data.data.slice(0, 3);
        this.setState({ gifs: firstThreeGifs });
      })
      .catch((error) => console.log('Error fetching data:', error));
  };

  handleSearchSubmit = (query) => {
    this.fetchGifs(query);
  };

  render() {
    return (
      <div>
        <GifSearch onSubmit={this.handleSearchSubmit} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default GifListContainer;
