import Home from "./Home";
import NavBar from "./Navbar";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
//Switch -> Routes

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route path="/" element={<Home />}></Route>
            {/* v6 use above. v5 is below */}
            {/* <Route path="/">
              <Home/>
            </Route> */}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
