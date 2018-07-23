import { SIDEDRAWER_OPEN } from '../actions/types';

const initialState = {
    sidedrawerToggle: false,
    nestedSidedrawerToggle: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SIDEDRAWER_OPEN:
            return {
                sidedrawerToggle: !state.sidedrawerToggle
            };
        default:
            return state;
    }
}