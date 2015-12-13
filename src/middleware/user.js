import history from '../router/history';

import * as actions from '../actions/bot';

const userMiddleware = store => next => {
	const dispatch = store.dispatch;
	var socket;

	return action => {
		const state = store.getState();

		switch (action.type) {
			case "USER_CONNECT":
				socket = io();

				socket.on('botsaying', (message) => {
					dispatch(actions.botSaying(message));
				});

				socket.on('botsaid', (message) => {
					dispatch(actions.botSaid(message));
				});

				return next(action);
		}

		next(action);
	};
}

export default userMiddleware;
