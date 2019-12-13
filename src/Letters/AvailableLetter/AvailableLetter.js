import React from 'react';
import classes from './AvailableLetter.module.css';
import Ax from '../../hoc/Ax';

const AvailableLetter = (props) => {

    const setStuff = () => {
      if (props.play()) {
        props.correct();
      }
      else {
        props.incorrect();
      }

      props.updateClicked(props.alphabet);
      props.setSolved();
    };

    return (
        <Ax>
          <span className={classes.AvailableLetter} onClick={setStuff}>{props.alphabet}</span>
        </Ax>
    );
}

export default AvailableLetter;