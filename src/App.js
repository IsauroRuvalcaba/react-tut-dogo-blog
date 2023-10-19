import BlogDetails from "./BlogDetails";
import Create from "./Create";
import Home from "./Home";
import NavBar from "./Navbar";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
import NotFound from "./NotFound";
//Switch -> Routes

// npx json-server --watch data/db.json --port 8000

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route path="/" element={<Home />}></Route>
            <Route path="/create" element={<Create />}></Route>
            <Route path="/blogs/:id" element={<BlogDetails />}></Route>
            {/* v6 use above. v5 is below. exact not needed in v6 */}
            {/* <Route exact path="/">
              <Home/>
            </Route> */}
            {/* <Route path="/create">
              <Creaet/>
            </Route> */}
            {/* the catch all NotFound has to be at bottom */}
            <Route path="*" element={<NotFound />}></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
