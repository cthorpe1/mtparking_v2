import React, {useState} from 'react';
import ParkingSpace from './ParkingSpace/ParkingSpace';
import FormContainer from '../FormContainer/FormContainer';

import classes from "./ParkingLot.module.css";

const parkingLot = () => {
    const [spaceOne, setSpaceOne] = useState({id: 1, name: "Chase", classTaken: "Level 2", reserved: true, form: false});
    const [spaceTwo, setSpaceTwo] = useState({id: 2, name: "", classTaken: "", reserved: false, form: false});
    const [spaceThree, setSpaceThree] = useState({id: 3, name: "", classTaken: "", reserved: false, form: false});
    const [spaceFour, setSpaceFour] = useState({id: 4, name: "", classTaken: "", reserved: false, form: false});
    const [spaceFive, setSpaceFive] = useState({id: 5, name: "", classTaken: "", reserved: false, form: false});
    const [spaceSix, setSpaceSix] = useState({id: 6, name: "", classTaken: "", reserved: false, form: false});
    
    const spaces = [[spaceOne, setSpaceOne], [spaceTwo, setSpaceTwo], [spaceThree,setSpaceThree], 
                    [spaceFour,setSpaceFour], [spaceFive, setSpaceFive], [spaceSix, setSpaceSix]];

    return(
      <div className={classes.ParkingLot}>
      {spaces.map(space => {
          if (space[0].form === false) {
            return (<ParkingSpace key={space[0].id}
                                  space={space[0]}
                                  setSpace={space[1]} />
              )
          } else {
            return <FormContainer key={space[0].id}
                                  space={space[0]} 
                                  setSpace={space[1]} />
          }
      })}
      </div>
    ) 
};

export default parkingLot;