import sequencersReducer from './sequencersReducer';

import {  combineReducers } from 'redux';

export default combineReducers({
    sequencers: sequencersReducer,
});
