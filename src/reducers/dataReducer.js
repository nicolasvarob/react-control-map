import { FETCH_PATROLS } from '../actions/types';

const initialState = {
    patrols: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_PATROLS:
            const duplicate = state.patrols.some(o => {
                return o.key === action.payload.key
            });
            if (duplicate) {
                return state;
            }
            else {
                const newState = [...state.patrols, action.payload];
                newState.sort(function (a, b) { return b.timestamp - a.timestamp });
                return {
                    patrols: newState.slice(0,10)
                };
            }
        default:
            return state;
    }
}