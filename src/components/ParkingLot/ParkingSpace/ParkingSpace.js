import React from "react";

import classes from "./ParkingSpace.module.css";

const Space = props => {
  const formToggler = () => {
    let newSpace = { ...props.space };
    newSpace.form = !newSpace.form;
    props.setSpace(newSpace);
  };

  const checkOutOfSpace = () => {
    const freeSpace = { ...props.space };
    freeSpace.name = "";
    freeSpace.classTaken = "";
    freeSpace.reserved = false;
    props.setSpace(freeSpace);
  };

  return (
    <div className={classes.ParkingSpace}>
      <h3>Parking Space {props.space.id}</h3>
      {props.space.reserved === false ? (
        <div>
          <p>Currently Available</p>
          <p className={classes.Spacer} style={{ visibility: "hidden" }}>
            alignment
          </p>
          <button onClick={formToggler}>Check In</button>
        </div>
      ) : (
        <div className={classes.CheckedOut}>
          <p>Checked Out By: {props.space.name}</p>
          <p>Taking Class: {props.space.classTaken}</p>
          <p>Leaving At: {props.space.leaving}</p>
          <button onClick={checkOutOfSpace}>Check Out</button>
        </div>
      )}
    </div>
  );
};

export default Space;
