import "./App.css";
import Dog from "./components/Dog";

function App() {
  const dogs = [
    { name: "Snickers", age: 2 },
    { name: "Buddy2", age: 8 },
    { name: "Buddy3", age: 8 },
  ];
  return (
    <div className="App">
      <h1>Hello Coders</h1>
      <hr />
      {dogs.map(({ name, age }) => (
        <Dog key={name} name={name} age={age} />
      ))}
    </div>
  );
}

export default App;
