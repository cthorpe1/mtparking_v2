import React from 'react';

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
        <div className={classes.FormContainer}>
            <a onClick={goBack}>
              <i title="Go Back" className="fa fa-arrow-left"></i>
            </a>
            <h4>Parking Space {props.space.id}</h4>
            <form onSubmit={formSubmitHandler} className={classes.Form}>
                <input name="name" 
                    placeholder=" Please enter your name" 
                    value={props.space.name}
                    type="text"
                    onChange={(e) => nameInputHandler(e.target.value)}
                    required />
                <select name="classes" required>
                    <option value="">Please select your class</option>
                    <option value="Foundations">Foundations MT</option>
                    <option value="Level 1">Level 1 MT</option>
                    <option value="Level 2">Level 2 MT</option>
                    <option value="Keiki MT">Keiki MT</option>
                    <option value="TRX/HIIT">TRX/HIIT</option>
                    <option value="Yoga">Yoga</option>
                    <option value="Coaching">Coaching</option>
                    <option value="Private Lesson">Private Lesson</option>
                </select>
                <input id="formSubmit" type="submit" value="Reserve Space" />
            </form>
        </div>
    )
};

export default formContainer;