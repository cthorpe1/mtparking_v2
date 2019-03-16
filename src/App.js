import React, { Component } from 'react';
import Header from './components/ui/Header/Header';
import ParkingLot from './components/ParkingLot/ParkingLot';
import Footer from './components/ui/Footer/Footer';
import classes from './App.module.css';
/*
Next Steps:
- Media Query for screen under 650px in height
*/

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Header />
        <ParkingLot />
        <Footer />
      </div>
    );
  }
}

export default App;
