import { Component } from "react";

class ClassComponent extends Component {
  render() {
    const { hello, showMessage } = this.props;

    return (
      <div>
        <h1>ClassComponent</h1>
        <p>Hello {hello}</p>
        <button onClick={showMessage}>Mostrar Alert</button>
      </div>
    );
  }
}

export default ClassComponent;
