import React from 'react';
import {Provider} from 'react-redux';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Header } from './components/header'
import Content from './containers/content'

import store from "./store"

function App() {
  return (
      <div className="App">
        <Header></Header>
        <Provider store = { store }>
          <Content></Content>
        </Provider>
      </div>
  );
}

store.subscribe( () => {
  console.log("listening to state");
})

export default App;
