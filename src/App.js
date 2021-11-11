import { useState } from "react";
import "./App.css";
import ConditionalRendering from "./components/condition-rendering/ConditionalRendering";
import { CartProvider } from "./context/CartContext";
import Routes from "./router/Routes";

function App() {
  const [isCondition, setIsCondition] = useState(true);
  const [showConditionalRendering, setShowConditionalRendering] =
    useState(true);
  const [otherState, setOtherState] = useState(false);

  const handleCondition = () => setIsCondition(!isCondition);

  const handleShowConditionalRendering = () =>
    setShowConditionalRendering(!showConditionalRendering);

  const handleUpdateOtherState = () => setOtherState(!otherState);

  return (
    <div className="App">
      {/* {showConditionalRendering && (
        <ConditionalRendering condition={isCondition} other='header-two-green' />
      )}
      <button onClick={handleCondition}>Cambiar condición</button>
      <button onClick={handleShowConditionalRendering}>
        Modificar montaje de ShowConditionalRendering
      </button>
      <button onClick={handleUpdateOtherState}>
        Modificar otherState
      </button>  */}
      <CartProvider>
        <Routes />
      </CartProvider>
    </div>
  );
}

export default App;
