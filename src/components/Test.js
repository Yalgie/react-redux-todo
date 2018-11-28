import React, { Component } from 'react';

export default class Test extends Component {
    handleChange() {
        console.log("Subscription", window.store.getState())
    }
    componentDidMount() {
        window.store.subscribe(this.handleChange)
    }
	render() {
		return <p>Testing Subscription</p>
	}
}