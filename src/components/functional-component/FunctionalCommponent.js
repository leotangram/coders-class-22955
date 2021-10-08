const FunctionalCommponent = ({ hello, setName, showMessage }) => {
  const handleName = () => setName("Leo");

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
