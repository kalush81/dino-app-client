import React from 'react';
import './App.css';
//import 'typeface-roboto';
import NavBar from './components/NavBar'
import DinosaurListContainer from './components/DinosaurListContainer';
import { Route } from "react-router-dom";
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main className="Main">
        <Route path='/dinosaurus' exact component={DinosaurListContainer}/>
        <Route path='/' exact component={Home}/>
      </main>
    </div>
  );
}
export default App;