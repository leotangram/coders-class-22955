import { Component } from "react";

class ClassComponent extends Component {
  // componentDidMount() {
  //   console.log("Hola, se renderizó este componente de clase, por primera vez");
  // }

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
