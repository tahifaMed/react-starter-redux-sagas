import { fromJS } from 'immutable';

const initialState = fromJS({
  videos: [],
  selectedVideo: null,
});

function videoReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_YOUTUBE_VIDEOS_ACTION':
      return state.set('videos', action.videos).set('selectedVideo', action.videos[0]);

    case 'SELECT_VIDEOS_ACTION':
      return state.set('selectedVideo', action.video);
    default:
      return state;
  }
}

export default videoReducer;
