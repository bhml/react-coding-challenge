import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Shows from './components/Shows';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <div className="content">
          <Route path="/" exact component={Home} />
          <Route
            path="/series/"
            render={routeProps => (
              <Shows
                {...routeProps}
                programType="series"
                bannerTitle="Popular Series"
              />
            )}
          />
          <Route
            path="/movies/"
            render={routeProps => (
              <Shows
                {...routeProps}
                programType="movie"
                bannerTitle="Popular Movies"
              />
            )}
          />
        </div>
        <Footer />
      </Router>
    );
  }
}
