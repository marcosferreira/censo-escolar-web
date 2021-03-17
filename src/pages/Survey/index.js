import React, { useState } from 'react';
import FormResidence from './FormResidence';
import FormPerson from './FormPerson';

import { Container } from './styles';

function Survey() {
  const [currentStep, setCurrentStep] = useState(0);

  const next = () => {
    setCurrentStep(currentStep + 1);
  };


  return (
    <Container>
      <FormResidence currentStep={currentStep} next={next} />
      <FormPerson currentStep={currentStep} next={next} />
    </Container>
  );
}

export default Survey;