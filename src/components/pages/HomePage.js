import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';

import * as BotActions from '../../actions/bot';

import MessageBox from '../partials/MessageBox';

class HomePage extends Component {
	componentDidMount() {
		this.props.userConnect();
	}

	render() {
		const {bot: {bot}} = this.props;

		return (
			<div>
				{(() => {
					if (bot.saying) {
						return (
							<p>Bot is speaking... {bot.saying}</p>
						);
					} else if (bot.typing) {
						return <p>Bot is thinking...</p>
					}
				})()}
				<p>Welcome to the LaughBot</p>
			</div>
		);
	}
}

HomePage.propTypes = {
};

function mapStateToProps(state, ownProps) {
	return {
		bot: state.bot
	};
}

export default connect(
	mapStateToProps,
	BotActions
)(HomePage);
