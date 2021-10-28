import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import TeamDetails from './Components/TeamDetails/TeamDetails';


function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/team/:idTeam">
              <TeamDetails></TeamDetails>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;