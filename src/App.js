import React, { Component } from 'react';
import alexFace from './static/image/alexFace.svg';
import gitHub from './static/image/gitHub.svg';
import linkedin from './static/image/linkedin.svg';
import AboutMe from './AboutMe'
import Experience from './Experience';
import Footer from './Footer';
import './App.css';


class App extends Component {
  render() {
    return (
      <div id="app">
        <header id="app--header">
          <div id = "app--header-wrapper">
            <img src={alexFace} id="app--logo" alt="logo" />
            <h1 id="app--title">Alex Greenberg</h1>
          </div>
        </header>
        <AboutMe>
        </AboutMe>
        <Experience>
        </Experience>
        <Footer>
        </Footer>
      </div>


    );
  }
}

export default App;
