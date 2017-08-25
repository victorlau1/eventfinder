import { combineReducers } from 'redux';
import EventReducer from './event_reducer.js';
import AuthReducer from './auth_reducer.js';
import ArtistReducer from './artist_reducer.js';
import MapReducer from './map_reducer.js';

const rootReducer = combineReducers({
   events: EventReducer,
   startDate: EventReducer,
   hoveredEvent: EventReducer,
   artist: ArtistReducer,
   artistId: ArtistReducer,
   zoom: MapReducer,
   mapCenter: MapReducer,
   token: AuthReducer
});

export default rootReducer;

