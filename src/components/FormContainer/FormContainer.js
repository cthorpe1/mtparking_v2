import React from 'react';
import Backdrop from './Backdrop/Backdrop';
import classes from './FormContainer.module.css';

const formContainer = (props) => {
    const nameInputHandler = (value) => {
        const newSpace = {...props.space};
        newSpace.name = value;
        props.setSpace(newSpace);
    };
    
    const formSubmitHandler = (e) => {
        const name = e.target[0].value;
        const classTaken = e.target[1].value;
        const reservedSpace = {...props.space};
        reservedSpace.name = name;
        reservedSpace.classTaken = classTaken;
        reservedSpace.reserved = !reservedSpace.reserved;
        reservedSpace.form = !reservedSpace.form;
        props.setSpace(reservedSpace);
        e.preventDefault();
    };

    const goBack = () => {
        const newSpace = {...props.space};
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
                <input type="text" 
                       id="name" 
                       placeholder="Enter your name here" 
                       value={props.space.name}
                       onChange={(e) => nameInputHandler(e.target.value)}/>
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
                <input id="formSubmit" type="submit" value="Reserve Space" />
              </li>
            </ul>
          </form>
        </div>
      </React.Fragment>
    )
};

export default formContainer;
