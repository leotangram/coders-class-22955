import "./App.css";
import Dog from "./components/Dog";
import NavBar from "./components/nav-bar/NavBar";

function App() {
  const dogs = [
    { name: "Snickers", age: 2 },
    { name: "Buddy2", age: 8 },
    { name: "Buddy3", age: 8 },
  ];

  const handleButton = () => console.log("Hello Coders!");

  return (
    <div className="App">
      <NavBar />
      <h1 style={{ color: "green" }}>Hello Coders</h1>
      <button onClick={handleButton}>Oprimir 2</button>
      <hr />
      {dogs.map(({ name, age }) => (
        <Dog key={name} name={name} age={age} />
      ))}
    </div>
  );
}

export default App;
