const initial_state = {
	bot: {
		thinking: false,
		saying: false
	}
}

export default function counter(state = initial_state, action) {
	switch (action.type) {
		case "BOT_START_SAYING":
			return {
				...state,
				bot: {
					...state.bot,
					saying: action.text
				}
			};
		case "BOT_STOP_SAYING":
			return {
				...state,
				bot: {
					...state.bot,
					saying: (state.bot.saying === action.text) ? null : state.bot.saying
				}
			};
		default:
			return state;
	}
}
