import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Banner from './Banner';
import { pickFavourites } from '../utils';
import './Shows.css';

class Shows extends Component {
  constructor(props) {
    super(props);

    this.state = {
      feed: null,
      loading: false,
      error: false,
    };
  }

  componentDidMount() {
    this.fetchFeed();
  }

  async fetchFeed() {
    this.setState({ loading: true });

    let results = null;
    try {
      const response = await fetch('/feed.json');
      if (!response.ok) {
        this.setState({ error: true, loading: false });
        return results;
      }

      results = await response.json();
      this.setState({ feed: results, loading: false });
    } catch (error) {
      console.error('Fetch feed err:', error); // eslint-disable-line no-console
      this.setState({ error: true, loading: false });
    }

    return results;
  }

  renderContent() {
    const { programType } = this.props;
    const { feed, loading, error } = this.state;

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Oops, something went wrong...</div>;

    if (!feed || !feed.total) {
      return <div>Looks like there is nothing to watch ¯\_(ツ)_/¯.</div>;
    }

    const shows = pickFavourites(feed.entries, {
      limit: 21,
      releaseYear: 2010,
      programType,
    });

    return (
      <div className="show-list">
        {shows.map(show => (
          <div className="show" key={show.title}>
            <img src={show.images['Poster Art'].url} alt={show.title} />
            <div className="show-title">{show.title}</div>
          </div>
        ))}
      </div>
    );
  }

  render() {
    return (
      <>
        <Banner content={this.props.bannerTitle} />
        <div className="wrapper shows">{this.renderContent()}</div>
      </>
    );
  }
}

Shows.propTypes = {
  programType: PropTypes.string.isRequired,
  bannerTitle: PropTypes.string.isRequired,
};

export default Shows;
