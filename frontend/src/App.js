import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";


class App extends Component {

  state = {};
  componentWillMount() {}

  componentDidMount() {
    this._getMovies();
    console.log('hello')
    
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie) => {
      console.log(movie);
      
      return <Movie
        key={movie.id} 
        title={movie.title} 
        poster={movie.poster} 
        contents={movie.contents}
      />;
    })
    return movies;
  }

  _getMovies = async () => {
    const movies = await this._callApi();
    this.setState({
      movies
    })
  }

  _callApi = () => {   
    return fetch('/users')
    .then(potato => potato.json())
    .then(json => json)
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}
export default App;
