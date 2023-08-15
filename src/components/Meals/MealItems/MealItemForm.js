import Input from '../../Ui/Cards/Input';
import classes from './MealItemForm.module.css';
import CartContext from '../../../store/cart-context';
import { useRef, useState } from 'react';
const MealItemForm = (props) => {
  const [isAmountValid,setIsAmountValid]=useState(true);
 const  amountInputRef =useRef();

  const FormSubmitHandler=(e)=>{
    e.preventDefault();
    //getting the current ammount and it will return it as a string
   let enteredAmount=amountInputRef.current.value;

   //converting string to number
   let enteredAmountNumber=+enteredAmount;

   if(enteredAmount.trim().length===0 ||enteredAmountNumber<1 || enteredAmountNumber>5 ){
    setIsAmountValid(false);
    return ;
   }
   else{

    props.onAddToCart(enteredAmountNumber);
enteredAmount=1;
amountInputRef.current.value=1;
    setIsAmountValid(true);
  }
  }
  return (
    <form className={classes.form} onSubmit={FormSubmitHandler} >
      <Input
        ref={amountInputRef}
        label='Amount'
        input={{
          id: 'Amount',
          type: 'number',
          step: '1',
          defaultValue: '1',
        }}
      />
        {!isAmountValid && <p className={classes.errorBox}>Enter a valid amount between (1-5)</p>}
      
      <button  >+ Add</button>
      
    
    </form>
  );
};

export default MealItemForm;