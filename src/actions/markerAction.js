import { SELECTED_MARKER, RESET_HOME_PATROLS } from './types';

export const selectedMarker = (homeId, homeAddress) => dispatch => {
    if (!homeId) {
        dispatch({
            type: RESET_HOME_PATROLS
        })
    }
    dispatch({
        type: SELECTED_MARKER,
        id: homeId,
        homeAddress: homeAddress
    });
}
