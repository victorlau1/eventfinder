import { GET_ZOOM } from '../actions/index';

export default function (state = [], action) {
   switch(action.type){
      case GET_ZOOM:
         return action.payload
      }
   return state;
}
