/* Create a component <HideMe>Blah blah blah</HideMe> that uses children to accept some content. When the component is clicked the content should be hidden. */
import { Component } from "react";

class HideMe extends Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false,
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState({ visible: true });
	}
	stylehide() {
		let { children } = this.props;
		return this.state.visible ? null : children;
	}

	render() {
		const stylehidden = this.stylehide();
		return <p onClick={this.handleClick}>{stylehidden}</p>;
	}
}

export default HideMe;
