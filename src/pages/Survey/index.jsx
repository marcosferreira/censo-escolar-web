import React from 'react';
// import FormResidence from './FormResidence';
// import FormPerson from './FormPerson';

import { Container } from './styles';
import { Form } from '../../components/Form';

// function Survey() {
//   const [currentStep, setCurrentStep] = useState(0);

//   const next = () => {
//     setCurrentStep(currentStep + 1);
//   };


//   return (
//     <Container>
//       <FormResidence currentStep={currentStep} next={next} />
//       <FormPerson currentStep={currentStep} next={next} />
//     </Container>
//   );
// }

function Survey() {
  return <Container>
    <Form>
      <input />
    </Form>
  </Container>
}

export default Survey;
