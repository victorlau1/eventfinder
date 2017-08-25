import { combineReducers } from 'redux';
import ArtistReducer from './artist_reducer.js';
import ArtistIdReducer from './artist_id_reducer.js';
import AuthReducer from './auth_reducer.js';
import CenterReducer from './center_reducer.js';
import DateReducer from './date_reducer.js';
import EventReducer from './event_reducer.js';
import HoverReducer from './hover_reducer.js';
import ZoomReducer from './map_reducer.js';


const rootReducer = combineReducers({
   token: AuthReducer,
   artist: ArtistReducer,
   artistId: ArtistIdReducer,
   mapCenter: CenterReducer,
   startDate: DateReducer,
   events: EventReducer,
   hoveredEvent: HoverReducer,
   zoom: ZoomReducer
});

export default rootReducer;

