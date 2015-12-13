export function userConnect() {
	return {
		type: "USER_CONNECT"
	};
}

export function startThinking() {
	return {
		type: "BOT_START_THINKING"
	};
}

export function botSaying(text) {
	return {
		type: "BOT_START_SAYING",
		text: text
	};
}

export function botSaid(text) {
	return {
		type: "BOT_STOP_SAYING",
		text: text
	};
}

export function botTyping(text) {
	return {
		type: "BOT_TYPING",
		text: text
	};
}
