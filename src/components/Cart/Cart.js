import { useContext, useState } from 'react';
import Modal from '../Ui/Cards/Modal';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import MealItem from '../Meals/MealItems/MealItem';
import CartItem from './CartItem';
import Profile from '../Customer/Profile';
import Signup from '../authentication/Signup';
import LoginPage from '../authentication/LoginPage';

const Cart = (props) => {

  const[addAddress,setaddAddress]=useState(false);
const[confirmAddress,setconfirmAddress]=useState(false);
const[validAddress,setvalidAddress]=useState(false);
  const cartCtx=useContext(CartContext)
  const totalAmount=cartCtx.totalAmount.toFixed(2);
  const addAddressHandler=()=>{
    if(cartCtx.items.length>0){
      setaddAddress(true);
      setconfirmAddress(true)
    }
   

  }
  const validForm=()=>{
    setaddAddress(false)
    setvalidAddress(true)
  }
  const confirmAddressHandler=()=>{
  alert('order placed successfully')
  cartCtx.items.length=0;
  props.hideCartHandler();
  }
const cartItemRemoveHandler=(id)=>{
cartCtx.removeItem(id);
props.hideCartHandler()
}

const cartItemDecreaseHandler=(id)=>{
  cartCtx.decreaseItem(id);
  }
  const cartItemIncreaseHandler=(id)=>{
    cartCtx.increaseItem(id);
    }

  const cartItems = (
    <ul className={classes['cart-items']}>
     { cartCtx.items.map((item)=>{
  return(
    <CartItem
    key={item.id}
    id={item.id}
    img={item.img}
    name={item.name}
    price={item.price}
    amount={item.amount}
    onDecrease={cartItemDecreaseHandler.bind(null,item.id)}
    onIncrease={cartItemIncreaseHandler.bind(null,item.id)}
    onRemove={cartItemRemoveHandler.bind(null,item.id)}
    />
    
  )
     })}
    </ul>
  );

  return (
   
        <Modal onClose={props.hideCartHandler}>
      {cartCtx.items.length>0 && cartItems}
       { addAddress && <Profile validForm={validForm}/>}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>Rs.{totalAmount}</span>
      </div>
   
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.hideCartHandler}>Close</button>
        {!confirmAddress ? <button className={classes.button} onClick={addAddressHandler} disabled={cartCtx.items.length<=0}>Order</button>: <button className={classes.button} onClick={confirmAddressHandler} disabled={!validAddress}>confirm</button>}
      </div>
      </Modal>
  );
};

export default Cart;