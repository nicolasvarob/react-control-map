import { FETCH_PATROLS } from '../actions/types';

const initialState = {
    patrols: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_PATROLS:
            //TODO 
            //Mover la logica de mutación
            const newState = [...state.patrols, action.payload];
            newState.sort(function (a, b) {
                return b.timestamp - a.timestamp
            });
            return {
                patrols: newState.slice(0, 10)
            };
        default:
            return state;
    }
}