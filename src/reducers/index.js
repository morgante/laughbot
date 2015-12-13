import { combineReducers } from 'redux';

import counter from './counter';
import bot from './bot';

const rootReducer = combineReducers({
	counter,
	bot
});

export default rootReducer;
