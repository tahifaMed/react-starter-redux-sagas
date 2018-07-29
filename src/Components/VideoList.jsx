import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectVideoAction } from '../actions/action';

function VideoList(props) {
  console.log('videos', props.videos);
  const videoListLi =
    props.videos.length > 0
      ? props.videos.map(video => (
        <li className="list-group-item" key={video.etag}>
          <div className="video-list media">
            <div className="media-left">
              <img className="media-object" alt="" src={video.snippet.thumbnails.default.url} />
            </div>
            <div className="media-body">
              <div className="media-heading">{video.snippet.title}</div>
            </div>
          </div>
        </li>
        ))
      : [];
  return (
    <div className="col-md-4 list-group">
      <ul>{videoListLi}</ul>
    </div>
  );
}

VideoList.propTypes = {
  videos: PropTypes.arrays,
};

VideoList.defaultProps = {
  videos: [],
};

function mapDispatchToProps(dispatch) {
  return {
    selectVideo: (video) => {
      dispatch(selectVideoAction(video));
    },
  };
}

export default connect(
  null,
  mapDispatchToProps,
)(VideoList);
