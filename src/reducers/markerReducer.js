import { SELECTED_MARKER } from '../actions/types';

const initialState = {
    selectedMarker: null,
    selectedMarkerAddress: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SELECTED_MARKER:
            return {
                selectedMarker: action.id,
                selectedMarkerAddress: action.homeAddress
            };
        default:
            return state;
    }
}