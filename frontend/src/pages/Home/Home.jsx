import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from '../../components/shared/Button/Button';
import Card from '../../components/shared/Card/Card';
import classes from './Home.module.css';

const Home = () => {
  const title = "Welcome to Oliullah's voice house";
  const icon = 'hand.png';
  const router = useHistory();

  const onclick = () => {
    router.push('/register');
  };
  return (
    <div className={classes.cardWraper}>
      <Card title={title} icon={icon}>
        <p className={classes.text}>
          we are working hard to get Oliullah’s house to ready for everyone!
          while we wrap up the finishing youches , we are adding people gradualy
          to make sure nothing breacks
        </p>
        <div>
          <Button onclick={onclick} text="Get your username"></Button>
        </div>
        <div className={classes.signin}>
          <span>Have an invite text?</span>
          <Link
            to="/login"
            style={{
              color: '#0077ff',
              fontWeight: 'bold',
              textDecoration: 'none',
              marginLeft: '10px',
            }}
          >
            Sign in
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Home;
