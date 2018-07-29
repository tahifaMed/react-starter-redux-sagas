import { combineReducers } from 'redux-immutable';
import videoReducer from './videoReducer';

const rootReducer = combineReducers({
  videoPage: videoReducer,
});

export default rootReducer;
