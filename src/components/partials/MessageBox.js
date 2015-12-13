var _ = require('lodash');
var classNames = require('classnames');

import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import {LinkContainer} from 'react-router-bootstrap';
import { Button } from 'react-bootstrap';

export default class MessageBox extends Component {
	constructor(props) {
		super(props);

		this.state = {
			message: ''
		};
	}

	render() {
		const {onMessage, onChange} = this.props;

		const submitHandler = (evt) => {
			evt.preventDefault();

			onMessage(this.state.message);

			this.setState({
				message: ''
			});
		};

		const changeHandler = () => {
			var value = this.refs.message.getDOMNode().value;

			onChange(value);

			this.setState({
				message: value
			});
		}

		return (
			<form onSubmit={submitHandler}>
				<input
					ref="message"
					className="form-control"
					type="text"
					name="message"
					id="message"
					onChange={changeHandler}
					value={this.state.message} />
				<input type="submit" className="btn btn-primary" name="submit" value="Send" />
			</form>
		);
	}
}
