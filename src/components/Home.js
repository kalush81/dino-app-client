import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
      console.log('i am home comp with link')
    return (
      <div>
        <main className="home">
        <h1>Welcome to this Dinosaur Database</h1>
        <Link to='/dinosaurs'>Click Here To Acces Our Database</Link>
        </main>
      </div>
    )
  }
}