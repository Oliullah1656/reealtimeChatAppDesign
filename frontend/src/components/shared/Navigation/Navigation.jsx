import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  const brandStyles = {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '22px',
    display: 'flex',
    alignItems: 'center',
  };
  return (
    <nav className={`${styles.navbar} container`}>
      <Link style={brandStyles} to="/">
        <img src="/images/hand.png" alt="logo" />
        <span style={{ marginLeft: '10px' }}>Oliullah</span>
      </Link>
    </nav>
  );
};

export default Navigation;
