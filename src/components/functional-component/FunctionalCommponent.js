import { useEffect } from "react";

const FunctionalCommponent = ({ hello, setName, showMessage, name }) => {
  const handleName = () => setName("Leo");

  useEffect(() => {
    return () => {
      console.log("Componente destruido");
    };
  }, []);

  // useEffect(() => {
  //   setName(Math.random().toString());
  // }, [name]);

  return (
    <div>
      <h1>FunctionalCommponent</h1>
      <p>Hello {hello}</p>
      <button onClick={showMessage}>Mostrar Alert</button>
      <button onClick={handleName}>Cambiar nombre</button>
    </div>
  );
};

export default FunctionalCommponent;
