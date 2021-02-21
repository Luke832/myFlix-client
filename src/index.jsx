import React from 'react';
import ReactDOM from 'react-dom';

import { MainView } from './components/main/main-view/main-view';

//Import statement to bundle './index.scss'
import './index.scss';

import Container from 'react-bootstrap/Container';

//Main component
class MyFlixApplication extends React.Component {
  render() {
    return (
      <Container>
        <MainView />
      </Container>
    );
  }
}

//Finds the root of the app
const container = document.getElementsByClassName('app-container')[0];

//Tells React to render the app in the root DOM element
ReactDOM.render(React.createElement(MyFlixApplication), container);