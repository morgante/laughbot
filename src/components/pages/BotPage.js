import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';

import * as BotActions from '../../actions/bot';

import MessageBox from '../partials/MessageBox';

class BotPage extends Component {
	_connect() {
		console.log('connect');

		this.props.botConnect();
	}

	componentDidMount() {
		this._connect();
	}

	constructor(props) {
		super(props);
	}

	render() {
		const {bot: {bot}} = this.props;

		const typeHandler = (text) => {
			this.props.botType(text);
		}

		const messageHandler = (text) => {
			this.props.botSay(text);
		}

		console.log('bot', bot);

		return (
			<div>
				<p>You are home!</p>

				<MessageBox onMessage={messageHandler} onChange={typeHandler} canSend={!bot.saying} />
			</div>
		);
	}
}

BotPage.propTypes = {
};

function mapStateToProps(state, ownProps) {
	return {
		bot: state.bot
	};
}

export default connect(
	mapStateToProps,
	BotActions
)(BotPage);
