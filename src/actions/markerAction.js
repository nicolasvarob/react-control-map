import { SELECTED_MARKER } from './types';

export const selectedMarker = (homeId,homeAddress) => dispatch => { 
    dispatch({
        type: SELECTED_MARKER,
        id: homeId,
        homeAddress: homeAddress
    });
}
