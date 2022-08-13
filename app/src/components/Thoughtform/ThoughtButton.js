import React from 'react';
import { Button } from '@material-ui/core';

const ThoughtButton = ({ handleClick }) => {
    return <Button style={{fontSize: "5em", fontWeight: "bold", width: "100%"}} onClick={handleClick} aria-label="Add a Thought">+</Button>
}

export default ThoughtButton