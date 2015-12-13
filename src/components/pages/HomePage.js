import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';

import MessageBox from '../partials/MessageBox';

class HomePage extends Component {
	_connect() {
		console.log('connect');

		this.socket = io();
	}

	componentDidMount() {
		this._connect();
	}

	constructor(props) {
		super(props);
	}

	render() {
		const messageHandler = (text) => {
			console.log('bot say', text);
	
			this.socket.emit('botsay', text);
		}

		return (
			<div>
				<p>You are home!</p>

				<MessageBox onMessage={messageHandler} />
			</div>
		);
	}
}

HomePage.propTypes = {
};

function mapStateToProps(state, ownProps) {
	return {
	};
}

export default connect(
	mapStateToProps
)(HomePage);
