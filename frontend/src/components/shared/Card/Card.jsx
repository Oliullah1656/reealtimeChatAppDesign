import React from 'react';
import classes from './Card.module.css';
import { Link } from 'react-router-dom';

const Card = ({ title, icon, children }) => {
  return (
    <div className={classes.cardWraper}>
      <div className={classes.card}>
        <div className={classes.headingWrapper}>
          <img src={`/images/${icon}`} alt="logo" />
          <h1>{title}</h1>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Card;
