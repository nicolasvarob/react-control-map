import { SIDEDRAWER_OPEN } from '../actions/types';

const initialState = {
    visible: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SIDEDRAWER_OPEN:
            return {
                visible: !state.visible
            };
        default:
            return state;
    }
}