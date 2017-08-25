import { GET_EVENTS, HOVER_EVENT } from '../actions/index';

export default function (state = [], action) {
   console.log('ACTION WAS', action)
   switch(action.type){
      case GET_EVENTS:
         return  action.payload.data;
      case HOVER_EVENT:
         return {...state, hoveredEvent: action.payload}
      }
   return state;
}
