//Create a component <EvenClicks> that displays "Even" if it's been clicked an even number of times and "Odd" if it's been clicked an odd number of times.

import React from "react";

class EvenClicks extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			counter: 0,
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState({ counter: this.state.counter + 1 });
	}

	EvenOdd() {
		if (this.state.counter === 0) {
			return "Click Me!";
		}
		if (this.state.counter % 2 !== 0) {
			return "Odd";
		} else {
			return "Even";
		}
	}

	render() {
		let current = this.EvenOdd();
		return <button onClick={this.handleClick}>{current}</button>;
	}
}

export default EvenClicks;
