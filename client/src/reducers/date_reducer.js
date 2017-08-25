import { SET_DATE } from '../actions/index';

export default function (state = [], action) {
   switch(action.type){
      case SET_DATE:
         return action.payload;
      }
   return state;
}

