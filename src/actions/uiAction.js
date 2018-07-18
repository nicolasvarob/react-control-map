import { SIDEDRAWER_OPEN } from './types';

export const sidedrawerOpen = () => dispatch => { 
    dispatch({
        type: SIDEDRAWER_OPEN
    });
}
