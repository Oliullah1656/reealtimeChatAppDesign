import React from 'react';
import Button from '../../../components/shared/Button/Button';
import Card from '../../../components/shared/Card/Card';
import classes from './phoneStep.module.css';

const PhoneStep = ({ stepClick }) => {
  return (
    <div>
      <h1>hi</h1>
      <Card title="Enter your phone number" icon="teliphone.png">
        <div className={classes.center}>
          <div className={classes.inputWraper}>
            <img src="/images/bdFlag.png" alt="" />
            <input type="number" placeholder="01712345678" />
          </div>
        </div>
        <Button onclick={stepClick} text="Next" />
        <p>
          By entering your number . you’re agreeing to our Terms of service of
          privacy pollycy. Thanks
        </p>
      </Card>
    </div>
  );
};

export default PhoneStep;
