/* Create a component <CountBy step={ 5 }> that takes a step prop. It should display a number (starting at 0) inside a <p>. Every time it is clicked the number should go up by step. */

import React from "react";

class CountBy extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			counter: this.props.startVal,
			step: this.props.stepVal,
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState({ counter: this.state.counter + this.props.stepVal });
	}

	render() {
		return (
			<section>
				<button onClick={this.handleClick}>+</button>
				<p>{this.state.counter}</p>
			</section>
		);
	}
}

CountBy.defaultProps = {
	startVal: 0,
};

export default CountBy;
