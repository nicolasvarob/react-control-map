import { FETCH_PATROLS, FETCH_HOME_PATROLS } from '../actions/types';

const initialState = {
    patrols: [],
    homePatrols: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_PATROLS: {
            const nextState = [...state.patrols, action.payload];
            nextState.sort(function (a, b) {
                return b.timestamp - a.timestamp
            });
            return {
                patrols: nextState.slice(0, 10)
            };
        }
        case FETCH_HOME_PATROLS: {
            const nextState = [...state.homePatrols, action.payload];
            nextState.sort(function (a, b) {
                return b.timestamp - a.timestamp
            });
            return {
                homePatrols: nextState.slice(0, 10)
            };
        }
        default:
            return state;
    }
}