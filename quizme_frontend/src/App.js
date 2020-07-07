import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Header } from './components/header';
import Quiz from './containers/quiz';
import Manage from './containers/manage';
import { NotFound } from './components/notfound';

import store from "./store";


function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Provider store={store}>
          <Switch>
            <Route exact path="/" component={Quiz} />
            <Route path="/manage" component={Manage} />
            <Route component={NotFound} />
          </Switch>
        </Provider>
      </Router>
    </div>
  );
}

store.subscribe(() => {
  console.log("listening to state");
})

export default App;
