import { FETCH_PATROLS } from '../actions/types';

const initialState = {
    patrols: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_PATROLS:
            const nextState = [...state.patrols, action.payload];
            nextState.sort(function (a, b) {
                return b.timestamp - a.timestamp
            });
            return {
                patrols: nextState.slice(0, 10)
            };
        default:
            return state;
    }
}