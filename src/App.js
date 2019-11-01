import React from "react";
import "./App.css";
//import 'typeface-roboto';
import NavBar from "./components/NavBar";
import DinosaurListContainer from "./components/DinosaurListContainer";
import DinosaurDetailsContainer from "./components/DinosaurDetailsContainer";
import { Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main className="Main">
        <Route path="/dinosaurs" exact component={DinosaurListContainer} />
        <Route path="/dinosaurs/:id" component={DinosaurDetailsContainer} />
        <Route path="/" exact component={Home} />
      </main>
    </div>
  );
}
export default App;
