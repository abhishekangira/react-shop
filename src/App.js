import React from "react";
import "./styles.css";

console.clear()

export default class App extends React.Component {
  state = {
    name: this.props.name
  };

  componentDidMount() {
    this.setState((ps) => ({ name: `${ps.name} Sharma` }));
    console.log("component mounted");
  }

  componentDidUpdate() {
    console.log("component updated");
  }

  shouldComponentUpdate(np, ns) {
    return ns.name !== this.state.name
  }

  render() {
    return <h1>My name is {this.state.name}</h1>;
  }
}
