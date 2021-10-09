import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Detail from './components/Detail';
import Login from './components/Login';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        {/* <Home /> */}
        <Switch>
          <Route path="/detail" >
            <Detail />
          </Route>
          <Route path="/home" >
            <Home />
          </Route>
          <Route path="/login" >
            <Login/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
