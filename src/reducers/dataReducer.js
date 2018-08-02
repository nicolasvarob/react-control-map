import { FETCH_PATROLS, FETCH_HOME_PATROLS } from '../actions/types';

const initialState = {
    patrols: [],
    homePatrols: [],
    currentHome: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_PATROLS: {
            const nextState = [...state.patrols, action.payload];
            nextState.sort(function (a, b) {
                return b.timestamp - a.timestamp
            });
            return {
                ...state, patrols: nextState.slice(0, 10)
            };
        }
        case FETCH_HOME_PATROLS: {
            let nextState;
            if (state.currentHome !== action.id) {
                nextState = [action.payload];
            }
            else {
                nextState = [...state.homePatrols, action.payload];
            }
            nextState.sort(function (a, b) {
                return b.timestamp - a.timestamp
            });
            return {
                ...state, homePatrols: nextState, currentHome: action.id
            };
        }
        default:
            return state;
    }
}