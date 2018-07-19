import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import uiReducer from './uiReducer';
import markerReducer from './markerReducer';

export default combineReducers({
    patrols:dataReducer,
    uistate: uiReducer,
    markers: markerReducer
})