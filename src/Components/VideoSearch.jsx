import React from 'react';

function VideoSearch(props) {
  return (
    <div className="search-bar">
      <input onChange={evt => props.searchVideo(evt.target.value)} />
    </div>
  );
}

export default VideoSearch;
