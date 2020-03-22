import * as actionTypes from './actions';
import metallica from "../data/mettalica";
const initialState = {
        artist: metallica
}

const reducer = (state = initialState, action) =>{
        switch(action.type) {
            case actionTypes.CHANGE_ARTIST:
                console.log(state);
                            return {
                                ...state,
                                artist :  action.artist
                            };
                
            default:
                return state;
                
                
        }
}
export default reducer;