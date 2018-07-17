import { FETCH_PATROLS } from '../actions/types';

const initialState = {
    patrols:[]
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_PATROLS:
            return {
                patrols: [...state.patrols,action.payload]
            };
        default:
            return state;
    }
}