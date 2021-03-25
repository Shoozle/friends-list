import React from 'react';
import classes from './Spinner.module.css';

const spinner = () => (
    <div>
        <p className={classes.warning}>Heroku DB can be slow when inactive for a while</p>
        <div className={classes.spinner}>Loading...</div>
    </div>
    
)

export default spinner;