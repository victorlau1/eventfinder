import { GET_CENTER, GET_ZOOM } from '../actions/index';

export default function (state = [], action) {
   console.log('ACTION WAS', action)
   switch(action.type){
      case GET_CENTER:
         return  {lat: 37.783607, lng:-122.408967};
      case GET_ZOOM:
         return 13
      }
   return state;
}
