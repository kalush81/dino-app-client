import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

export default class DinosaursList extends Component {

  state = {
    era: ''
  }

  renderDinosaurs(dinosaur) {
    const { id, name, image, geological_era } = dinosaur;
    return (
      <li key={id}>
        <img className="DinosaurListImage" alt={name} src={image} />
        <Link to={`dinosaurs/${id}`}>
          <Button variant="contained" color="primary">
            {`${name}, from geological era: ${geological_era}.`}
          </Button>
        </Link>
      </li>
    );
  }

  render() {
    const { dinosaurs } = this.props;

    const filterMax = dinosaur => { 
      const filterCretaceous = dinosaurs.filter(
        dinosaur => dinosaur.geological_era === "CRETACEOUS"
      );
      const filterJurassic = dinosaurs.filter(
        dinosaur => dinosaur.geological_era === "JURASSIC"
      );
      const filterTriassic = dinosaurs.filter(
        dinosaur => dinosaur.geological_era === "TRIASSIC"
      );

      const mapDinos = dinosaurs.map(this.renderDinosaurs);

      switch (dinosaur) {
        case "CRETACEOUS":
          return filterCretaceous.map(this.renderDinosaurs);
        case "JURASSIC":
          return filterJurassic.map(this.renderDinosaurs);
        case "TRIASSIC":
          return filterTriassic.map(this.renderDinosaurs);
        default:
          return mapDinos;
      }
    };

    const attributeEra = (name) => {
      this.setState({era: name}) 
    }

    return (
      <div className="dinosaurList">
        <main>
          {!dinosaurs && "Loading..."}
          {dinosaurs && <ul>{filterMax(this.state.era)}</ul>}
        </main>
        <footer className="dinosaurListFooter">
          <p>Choose a geological era:</p>
          <br />
          <br />
          <Button
            variant="contained"
            color="primary"
            onClick={() => attributeEra('TRIASSIC')}
          >
            Triassic
          </Button>
          <br />
          <Button
            variant="contained"
            color="primary"
            onClick={() => attributeEra('JURASSIC')}
          >
            Jurassic
          </Button>
          <br />
          <Button
            variant="contained"
            color="primary"
            onClick={() => attributeEra('CRETACEOUS')}
          >
            Cretaceous
          </Button>
          <Link to="/">
            <Button variant="contained" color="primary">
              Return
            </Button>
          </Link>
        </footer>
      </div>
    );
  }
}