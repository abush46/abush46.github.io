import logo from "./logo.svg";
import "./App.css";

function Button() {
  return <Button>Click here</Button>;
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button />
        <h1>Hellow world</h1>
        <h2>Welcome to my react App</h2>
      </header>
    </div>
  );
}

export default App;
