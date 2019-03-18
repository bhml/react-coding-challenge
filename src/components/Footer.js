import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="wrapper">
          <div className="footer-links">
            <ul className="list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <a href="#">Terms and Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Collection Statement</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
              <li>
                <a href="#">Manage Account</a>
              </li>
            </ul>
          </div>
          <p className="copyright">
            <small>Copyright © 2019 DEMO Streaming. All Rights Reserved.</small>
          </p>
          <div className="external-links">
            <ul className="social-links">
              <li>
                <a href="#" className="footer-icons icon-social facebook" />
              </li>
              <li>
                <a href="#" className="footer-icons icon-social twitter" />
              </li>
              <li>
                <a href="#" className="footer-icons icon-social instagram" />
              </li>
            </ul>
            <ul className="app-links">
              <li>
                <a href="#" className="footer-icons icon-store ios" />
              </li>
              <li>
                <a href="#" className="footer-icons icon-store android" />
              </li>
              <li>
                <a href="#" className="footer-icons icon-store windows" />
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}
