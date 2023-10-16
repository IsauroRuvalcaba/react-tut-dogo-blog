import "./App.css";
import Home from "./Home";
import NavBar from "./Navbar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
