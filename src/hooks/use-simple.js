import { useState } from 'react';

const useSimple = (validateValue) => {
    console.log(validateValue)
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  console.log(valueIsValid)
  const hasError = !valueIsValid && isTouched;
  console.log(hasError)

  const valueChangeHandler = (event) => {
    console.log('inside change handler')
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    console.log('inside blur handler')
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue('');
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset
  };
};

export default useSimple;