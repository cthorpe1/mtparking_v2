import React from "react";
import Backdrop from "./Backdrop/Backdrop";
import classes from "./FormContainer.module.css";

const FormContainer = props => {
  const nameInputHandler = value => {
    const newSpace = { ...props.space };
    newSpace.name = value;
    props.setSpace(newSpace);
  };

  const formSubmitHandler = e => {
    const name = e.target[0].value;
    const classTaken = e.target[1].value;
    const leaving = e.target[2].value;
    const reservedSpace = { ...props.space };
    reservedSpace.name = name;
    reservedSpace.classTaken = classTaken;
    reservedSpace.leaving = leaving;
    reservedSpace.reserved = !reservedSpace.reserved;
    reservedSpace.form = !reservedSpace.form;
    props.setSpace(reservedSpace);
    e.preventDefault();
  };

  const goBack = () => {
    const newSpace = { ...props.space };
    newSpace.form = !newSpace.form;
    props.setSpace(newSpace);
  };

  return (
    <React.Fragment>
      <Backdrop show="true" />
      <div className={classes.FormContainer}>
        <div className={classes.BackArrowContainer}>
          <a onClick={goBack}>
            <i className="fa fa-arrow-left"></i>
          </a>
        </div>
        <h3>Parking Space {props.space.id}</h3>
        <form onSubmit={formSubmitHandler} className={classes.Form}>
          <ul className={classes.Flex}>
            <li>
              <label>Enter Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name here"
                value={props.space.name}
                onChange={e => nameInputHandler(e.target.value)}
              />
            </li>
            <li>
              <label>Select Your Class</label>
              <select name="classes" required>
                <option value="">Select your class</option>
                <option value="Foundations">Foundations MT</option>
                <option value="Level 1">Level 1 MT</option>
                <option value="Level 2">Level 2 MT</option>
                <option value="Keiki MT">Keiki MT</option>
                <option value="TRX/HIIT">TRX/HIIT</option>
                <option value="Yoga">Yoga</option>
                <option value="Coaching">Coaching</option>
                <option value="Private Lesson">Private Lesson</option>
              </select>
            </li>
            <li>
              <label>Expected Departure:</label>
              <select name="times" required>
                <option value="">Select expected departure time</option>
                <option value="9:00am">9:00am</option>
                <option value="9:30am">9:30am</option>
                <option value="10:00am">10:00am</option>
                <option value="10:30am">10:30am</option>
                <option value="11:00am">11:00am</option>
                <option value="5:00pm">5:00pm</option>
                <option value="5:30pm">5:30pm</option>
                <option value="6:00pm">6:00pm</option>
                <option value="6:30pm">6:30pm</option>
                <option value="7:00pm">7:00pm</option>
                <option value="7:30pm">7:30pm</option>
                <option value="8:00pm">8:00pm</option>
                <option value="8:30pm">8:30pm</option>
                <option value="9:00pm">9:00pm</option>
              </select>
            </li>
            <li>
              <input id="formSubmit" type="submit" value="Reserve Space" />
            </li>
          </ul>
        </form>
      </div>
    </React.Fragment>
  );
};

export default FormContainer;
