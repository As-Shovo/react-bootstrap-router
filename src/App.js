import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Employee from './componenet/Employee/Employee';
import Home from './componenet/Home/Home';
import Header from './componenet/Header/Header';
import Notfound from './componenet/Notfound/Notfound';
import SingleEmployee from './componenet/SingleEmployee/SingleEmployee'

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/employee">
            <Employee></Employee>
          </Route>
          <Route exact path="/employee/:id">
            <SingleEmployee></SingleEmployee>
          </Route>




          <Route path="*">
            <Notfound></Notfound>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
