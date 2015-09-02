import React, { Component } from 'react';

const styles = require('../styles/container.scss');

export default class App extends Component {
  render() {
    return (
    	<div className={styles.container}>
    		<h1>Hello, world... THIS IS AWESOME!</h1>
    	</div>
    );
  }
}
