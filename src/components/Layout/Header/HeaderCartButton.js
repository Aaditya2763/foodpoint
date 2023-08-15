import { useContext, useEffect, useState } from 'react';
import CartIcon from '../../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../../store/cart-context';

const HeaderCartButton = (props) => {
  const[btnHighlighted,setbtnHighlighted]=useState(false);
    const cartCtx=useContext(CartContext);
    const {items}=cartCtx;
    const numberOfCartItems=cartCtx.items.reduce((initialNumber ,item)=>{
return initialNumber+item.amount;
    },0)
const btnClasses=`${classes.button} ${btnHighlighted ? classes.bump :""}`

useEffect(()=>{
if(items.length===0){
  return;
}
setbtnHighlighted(true);
const timer=(setTimeout(() => {
  setbtnHighlighted(false)
}, 300))

return()=>{
  clearInterval(timer);
}
},[items])
  return (
    <button className={btnClasses} onClick={props.showCartHandler}>
      <span className={classes.icon}>
        <CartIcon  />
      </span>
     <span className={classes.badge}>{numberOfCartItems}</span> 
      <span>Your Cart</span>
      
    </button>
  );
};

export default HeaderCartButton;