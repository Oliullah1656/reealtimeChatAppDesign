import React from 'react';
import classes from './Button.module.css';
const Button = ({ text, onclick }) => {
  return (
    <div>
      <button onClick={onclick} className={classes.button}>
        <span>{text}</span>
        <img src="/images/arrow.png" alt="" />
      </button>
    </div>
  );
};

export default Button;
