import React from 'react';
import PropTypes from 'prop-types';

import { Card, Button } from 'react-bootstrap';

import './movie-view.scss';

export class MovieView extends React.Component {

  constructor() {
    super();

    this.state = {};
  }

  render() {
    const { movie, leaveMovieView } = this.props;

    if (!movie) return null;

    return (
      <div className="movie-view">
        <Card>
          <Card.Img className="movie-poster" variant="top" src={movie.ImagePath} />
          <Card.Title className="label-title">{movie.Title}</Card.Title>
          <Card.Body>
            <Card.Text className="label-body">{movie.Description}</Card.Text>
            <Card.Text className="label-body">Director: {movie.Director.Name}</Card.Text>
            <Card.Text className="label-body">Genre: {movie.Genre.Title}</Card.Text>
          </Card.Body>
          <Button className="return-button" variant="primary" onClick={leaveMovieView}>Back</Button>
        </Card>
      </div>
    );
  }
}

MovieView.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    Genre: PropTypes.shape({
      Title: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired,
    }),
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Bio: PropTypes.string.isRequired,
      Birth: PropTypes.string.isRequired,
      Death: PropTypes.string,
    }),
    ImagePath: PropTypes.string.isRequired,
    Actors: PropTypes.array.isRequired,
    Featured: PropTypes.bool.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired
};