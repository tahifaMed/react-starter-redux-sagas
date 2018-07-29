import React, { Component } from 'react';
import PropTypes from 'prop-types';
import YTSearch from 'youtube-api-search';
import { connect } from 'react-redux';
import './App.css';
import VideoItem from './Components/VideoItem';
import VideoList from './Components/VideoList';
import VideoSearch from './Components/VideoSearch';
import { fetchYoutubeVideo } from './actions/action';

const API_KEY = 'AIzaSyDGJ3DsFyBwnzIIspPpyvINfWn9Ggf-TdQ';
class App extends Component {
  constructor(props) {
    super(props);
    this.videoSearchAPI();
  }
  videoSearchAPI() {
    YTSearch(
      {
        key: API_KEY,
        term: 'surf',
      },
      (videos) => {
        this.props.fetchYoutubeVideo(videos);
      },
    );
  }

  render() {
    return (
      <div className="App">
        <VideoSearch />
        <VideoItem video={this.props.selectedVideo} />
        <VideoList videos={this.props.videos} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    videos: state.getIn(['videoPage', 'videos']),
    selectedVideo: state.getIn(['videoPage', 'selectedVideo']),
  };
}

App.propTypes = {
  selectedVideo: PropTypes.objects,
  videos: PropTypes.arrays,
  fetchYoutubeVideo: PropTypes.func,
};

App.defaultProps = {
  selectedVideo: {},
  videos: [],
  fetchYoutubeVideo: () => {},
};

function mapDispatchToProps(dispatch) {
  return {
    fetchYoutubeVideo: (videos) => {
      dispatch(fetchYoutubeVideo(videos));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
