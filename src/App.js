import "./App.css";
import Company from "./Components/Medicine Company/company"; 
import Salesman from "./Components/Sales Man/salesman";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Pharmacy from "./Components/Pharmacy/Pharmacy";
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/com">Company Portal</Link>
            </li>
            <li>
              <Link to="/salesman">Sales Man Portal</Link>
            </li>
            <li>
              <Link to="/pharmacy">Pharmacy Portal</Link>
            </li>
            <li>
              <Link to=""> Details </Link>
            </li>
          </ul>
        </div>
        <header>
          <h1>Health Chain</h1>
        </header>

        <Switch>
          
          <Route path="/com">
            <Company/>
          </Route>
          <Route path="/salesman">
            <Salesman />
          </Route>
          <Route path="/pharmacy">
            <Pharmacy />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
