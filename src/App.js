import React, { Component } from "react";
import Header from "./components/ui/Header/Header";
import ParkingLot from "./components/ParkingLot/ParkingLot";
import classes from "./App.module.css";

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Header />
        <ParkingLot />
      </div>
    );
  }
}

export default App;
