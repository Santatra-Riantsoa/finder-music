import * as actionTypes from './actions';
import metallica from "../data/mettalica";
import { get } from '../util/util';
const initialState = {
        artist: metallica
}

const reducer = (state = initialState, action) =>{
        switch(action.type) {
            case actionTypes.CHANGE_ARTIST:
                return get('https://wasabi.i3s.unice.fr/search/more/Metallica');
                
        }
}
export default reducer;