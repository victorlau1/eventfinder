import { SET_TOKEN } from '../actions/index';

export default function (state = '', action) {
   switch(action.type){
      case SET_TOKEN: 
      return action.payload.token
   }
   return state;
}