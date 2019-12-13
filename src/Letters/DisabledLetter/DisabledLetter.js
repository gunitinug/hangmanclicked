import React from 'react';
import classes from './DisabledLetter.module.css';

const DisabledLetter = (props) => {
    return (
    <span className={classes.DisabledLetter} >{props.alphabet}</span>
    );
};

export default DisabledLetter;