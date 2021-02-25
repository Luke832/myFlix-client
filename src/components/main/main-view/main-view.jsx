import React from 'react';
import axios from 'axios';

import { LoginView } from '../login-view/login-view';
import { RegisterView } from '../registration-view/registration-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

import './main-view.scss';

import { Row, Col } from 'react-bootstrap';

export class MainView extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      selectedMovie: null,
      user: null,
      register: false,
    };
  }

  componentDidMount() {
    axios.get('https://myawesomeflix.herokuapp.com/movies')
      .then(response => {
        console.log(response);
        this.setState({
          movies: response.data
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onMovieClick(movie) {
    this.setState({
      selectedMovie: movie
    });
  }

  onRegister(user) {
    this.setState({
      user
    });
  }

  onLoggedIn(user) {
    this.setState({
      user
    });
  }

  leaveMovieView = e => {
    e.preventDefault()
    this.setState({ selectedMovie: null })
  }

  toggleLoginRegister = e => {
    e.preventDefault();
    this.setState({ register: !this.state.register })
  }

  render() {
    const { movies, selectedMovie, user, register } = this.state;

    if (register && !user) return <RegisterView toggleLoginRegister={this.toggleLoginRegister} onRegister={(register) => this.onRegister(register)} />

    if (!register && !user) return <LoginView toggleLoginRegister={this.toggleLoginRegister} onLoggedIn={user => this.onLoggedIn(user)} />;

    if (!movies) return <Row className="main-view justify-content-md-center" />;

    return (
      <Row className="main-view justify-content-md-center">
        {
          selectedMovie
            ? (
              <Col md={8}>
                <MovieView movie={selectedMovie} leaveMovieView={this.leaveMovieView} />
              </Col>
            )
            : movies.map(movie => (
              <Col md={3} key={movie._id}>
                <MovieCard movie={movie} onClick={movie => this.onMovieClick(movie)} />
              </Col>
            ))
        }
      </Row>
    );
  }
}