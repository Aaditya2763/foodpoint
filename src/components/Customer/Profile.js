import useInput from '../hooks/use-input';
import './Profile.css'
const Profile = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== '' && value.length>=3);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes('@'&& '.com'));

  const {
    value: enteredFlat,
    isValid: enteredFlatIsValid,
    hasError: flatInputHasError,
    valueChangeHandler: flatChangeHandler,
    inputBlurHandler: flatBlurHandler,
    reset: resetFlatInput,
  } = useInput((value) => 
value.includes('1')||value.includes('2')||value.includes('2')||value.includes('4')||value.includes('5')||value.includes('6')||
value.includes('7')||value.includes('8')||value.includes('9')
  )

  const {
    value: enteredArea,
    isValid: enteredAreaIsValid,
    hasError: areaInputHasError,
    valueChangeHandler: areaChangeHandler,
    inputBlurHandler: areaBlurHandler,
    reset: resetAreaInput,
  } = useInput((value) => value.length>0);


  const {
    value: enteredPincode,
    isValid: enteredPincodeIsValid,
    hasError: pincodeInputHasError,
    valueChangeHandler: pincodeChangedHandler,
    inputBlurHandler: pincodeBlurHandler,
    reset: resetpincodeInput,
  } = useInput((value) => value.length>=5)

  const {
    value: enteredPhoneNo,
    isValid: enteredphoneNoIsValid,
    hasError: phoneNoInputHasError,
    valueChangeHandler: phoneNoChangedHandler,
    inputBlurHandler: phoneNoBlurHandler,
    reset: resetphoneNoInput,
  } = useInput((value) => value.length==10)

  const {
    value: enteredCity,
    isValid: enteredCityIsValid,
    hasError: cityInputHasError,
    valueChangeHandler: cityChangedHandler,
    inputBlurHandler: cityBlurHandler,
    reset: resetCityInput,
  } = useInput((value) =>value.trim() !== '' && value.length>3)




  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid && enteredFlatIsValid,enteredphoneNoIsValid || enteredPincodeIsValid ||enteredCityIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid) {
      return;
    }

    
props.validForm();
    // nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
    resetNameInput();
    resetEmailInput();
    resetFlatInput();
    resetphoneNoInput();
    resetpincodeInput();
    resetCityInput();
    resetAreaInput();
  };

  const nameInputClasses = nameInputHasError
    ? 'form-control invalid'
    : 'form-control';

  const emailInputClasses = emailInputHasError
    ? 'form-control invalid'
    : 'form-control';

    const pincodeInputClasses =pincodeInputHasError
    ? 'form-control invalid'
    : 'form-control';

    const phoneNoInputClasses = phoneNoInputHasError
    ? 'form-control invalid'
    : 'form-control';

    const cityInputClasses = cityInputHasError
    ? 'form-control invalid'
    : 'form-control';
const areaInputClasses = areaInputHasError
    ? 'form-control invalid'
    : 'form-control';
    const flatInputClasses = flatInputHasError
    ? 'form-control invalid'
    : 'form-control';


  return (
    <form onSubmit={formSubmissionHandler} className='form-container'>
        <h1 style={{textDecorationLine:'underline',color:'maroon'}}>Add delivery address</h1>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && (
          <p className='error-text'>Name must not be empty.</p>
        )}
      </div>
      <div className={flatInputClasses}>
        <label htmlFor='Flat no'>Flat no</label>
        <input
          type='text'
           
          className='no-spinners'
          id='Flat no'
          inputMode='numeric'
          onChange={flatChangeHandler}
          onBlur={flatBlurHandler}
          value={enteredFlat}
        />
        {flatInputHasError && (
          <p className='error-text'>Please enter a flat no.</p>
        )}
      </div>
      <div className={areaInputClasses}>
        <label htmlFor='Area'>Area</label>
        <input
          type='text'
          id='Area'
          onChange={areaChangeHandler}
          onBlur={areaBlurHandler}
          value={enteredArea}
        />
        {areaInputHasError && (
          <p className='error-text'>Please enter a valid area name.</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your E-Mail</label>
        <input
          type='email'
          id='email'
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className='error-text'>Please enter a valid email.</p>
        )}
      </div>
      <div className={cityInputClasses}>
        <label htmlFor='city'>City</label>
        <input
          type='text'
          id='city'
          onChange={cityChangedHandler}
          onBlur={cityBlurHandler}
          value={enteredCity}
        />
        {cityInputHasError && (
          <p className='error-text'>Please enter a valid city name.</p>
        )}
      </div>

      <div className={pincodeInputClasses}>
        <label htmlFor='pincode'>Pincode</label>
        <input
          type='text'
          id='pincode'
          inputmode='numeric'  
          className='no-spinners'
          onChange={pincodeChangedHandler}
          onBlur={pincodeBlurHandler}
          value={enteredPincode}
        />
        {pincodeInputHasError && (
          <p className='error-text'>Please enter a valid pincode.</p>
        )}
      </div>
      <div className={phoneNoInputClasses}>
        <label htmlFor='PhoneNumber'>Phone Number</label>
        <input
           type='text'  
           id='phoneNumber'
           inputMode='numeric'  
           className='no-spinners'
           onChange={phoneNoChangedHandler}
           onBlur={phoneNoBlurHandler}
           value={enteredPhoneNo}
           maxLength={10} 
        />
        {phoneNoInputHasError && (
          <p className='error-text'>Please enter a valid phone no.</p>
        )}
      </div>
      
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default Profile;