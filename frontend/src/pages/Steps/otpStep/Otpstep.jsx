import React from 'react';
import Button from '../../../components/shared/Button/Button';
import Card from '../../../components/shared/Card/Card';
import classes from './otpStep.module.css';

const PhoneStep = ({ stepClick }) => {
  return (
    <div>
      <Card title="Enter your code we just send you" icon="lock.png">
        <div className={classes.center}>
          <div className={classes.inputWraper}>
            <img src="/images/key.png" alt="" />
            <div className={classes.input}>
              <input type="number" placeholder="7" />
              <input type="number" placeholder="7" />
              <input type="number" placeholder="7" />
              <input type="number" placeholder="7" />
            </div>
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
