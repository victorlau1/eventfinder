import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';
import moment from 'moment';

import App from './App.jsx';


const initial = {
  events: [],
  startDate: moment(),
  artist: '',
  hoveredEvent: '',
  artistId: undefined,
  token: undefined,
  mapCenter: {lat: 37.783607, lng:-122.408967},
  zoom: 13
}

const store = createStore(
    reducers,
    initial,
    composeWithDevTools(applyMiddleware(ReduxPromise))
)


console.log(store)

//Apply middleware Promises to handle Axios requests properly

ReactDOM.render(
  <Provider store={store}>  
    <App />
  </Provider>
  , document.getElementById('app')
);

