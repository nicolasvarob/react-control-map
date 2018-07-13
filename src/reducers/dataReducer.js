import { FETCH_PATROLS } from '../actions/types';

const initialState = {
    items:[]
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_PATROLS:
            return {
                ...state,
                patrols: action.payload
            };
        default:
            return state;
    }
}