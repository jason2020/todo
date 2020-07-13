import React from "react";
// import logo from "./logo.svg";
import "./App.css";

class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = { date: new Date() };
	}

	componentDidMount() {
		this.timerID = setInterval(() => this.tick(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick() {
		this.setState({
			date: new Date(),
		});
	}

	render() {
		return (
			<div>
				<h1>Hello, world!</h1>
				<h2>It is {this.state.date.toLocaleTimeString()}.</h2>
			</div>
		);
	}
}

class Toggle extends React.Component {
	constructor(props) {
		super(props);
		this.state = { on: true };

		// this.handleClick = this.handleClick.bind(this);
	}

	handleClick = () => {
		this.setState((state) => ({
			on: !state.on,
		}));
	}

	render() {
		return <button onClick={this.handleClick}>{this.state.on ? "ON" : "OFF"}</button>;
	}
}

function App() {
	return (
		<div className="App">
			<Clock />
			<Toggle />
		</div>
	);
}

export default App;
