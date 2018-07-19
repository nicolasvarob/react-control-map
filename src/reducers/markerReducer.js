import { SELECTED_MARKER } from '../actions/types';

const initialState = {
    selectedMarker: null,
    dummy: 'hola'
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SELECTED_MARKER:
            return {
                selectedMarker: action.id
            };
        default:
            return state;
    }
}