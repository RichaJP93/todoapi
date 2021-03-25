import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Todos from './components/Todos'
import Todo from './components/Todo'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" children={<Todos />}></Route>
          <Route exact path="/todo/:id" children={<Todo />}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
