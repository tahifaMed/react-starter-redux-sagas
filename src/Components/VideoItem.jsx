import React from 'react';
import PropTypes from 'prop-types';

function VideoItem(props) {
  if (!props.video) {
    return '';
  }
  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          title={props.video.snippet.title}
          className="embed-responsive-item"
          src={`https://www.youtube.com/embed/${props.video.id.videoId}`}
        />
      </div>
      <div className="details">
        <div>{props.video.snippet.title}</div>
        <div>{props.video.snippet.description}</div>
      </div>
    </div>
  );
}
VideoItem.propTypes = {
  video: PropTypes.object.isRequired,
};

export default VideoItem;
