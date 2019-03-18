import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Banner from './Banner';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <>
        <Banner content="Popular Titles" />
        <div className="wrapper home">
          <div className="tile">
            <Link to="/series">
              <div className="tile-top">Series</div>
            </Link>
            <div className="tile-title">Popular Series</div>
          </div>
          <div className="tile">
            <Link to="/movies">
              <div className="tile-top">Movies</div>
            </Link>
            <div className="tile-title">Popular Movies</div>
          </div>
        </div>
      </>
    );
  }
}
