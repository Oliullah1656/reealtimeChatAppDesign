import { useState } from 'react';
import AvatarStep from '../Steps/avatarStep/AvatarStep';
import NameStep from '../Steps/nameStep/NameStep';
import Otpstep from '../Steps/otpStep/Otpstep';
import PhoneStep from '../Steps/phoneEmaliStep/PhoneStep';
import UsernameStep from '../Steps/usernameStep/UsernameStep';

const steps = {
  1: PhoneStep,
  2: Otpstep,
  3: NameStep,
  4: UsernameStep,
  5: AvatarStep,
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
