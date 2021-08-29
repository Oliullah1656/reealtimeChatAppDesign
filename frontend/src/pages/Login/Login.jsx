import { useState } from 'react';
import Otpstep from '../Steps/otpStep/Otpstep';
import PhoneStep from '../Steps/phoneEmaliStep/PhoneStep';

const steps = {
  1: PhoneStep,
  2: Otpstep,
};

const Register = () => {
  const [step, setStep] = useState(1);
  const Step = steps[step];

  const stepClick = () => {
    setStep(step + 1);
  };
  return (
    <div>
      <Step stepClick={stepClick} />
    </div>
  );
};

export default Register;
