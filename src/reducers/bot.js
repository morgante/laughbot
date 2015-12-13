const initial_state = {
	bot: {
		thinking: false,
		saying: false
	}
}

export default function counter(state = initial_state, action) {
	switch (action.type) {
		case "BOT_SAY":
		case "BOT_START_SAYING":
			return {
				...state,
				bot: {
					...state.bot,
					typing: false,
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
		case "BOT_TYPING":
			return {
				...state,
				bot: {
					...state.bot,
					typing: (action.text === "") ? false : true
				}
			};
		default:
			return state;
	}
}
