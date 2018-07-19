import { SELECTED_MARKER } from './types';

export const selectedMarker = (homeId) => dispatch => { 
    dispatch({
        type: SELECTED_MARKER,
        id: homeId
    });
}
