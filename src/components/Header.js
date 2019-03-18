import './Header.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <header className="header gradient-blue shadow">
        <div className="wrapper">
          <Link to="/" className="header-logo">
            DEMO Streaming
          </Link>
          <nav className="header-nav">
            <span className="header-nav-item">
              <a href="#">Login</a>
            </span>
            <span className="header-nav-item free-trial">
              <a href="#" className="button gradient-grey">
                Start your free trial
              </a>
            </span>
          </nav>
        </div>
      </header>
    );
  }
}
