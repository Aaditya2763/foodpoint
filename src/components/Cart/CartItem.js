import { useReducer, useState } from "react";
import classes from "./CartItem.module.css";
import CartContext from "../../store/cart-context";
const CartItem = (props) => {
    const cartCtx=useReducer(CartContext);

 const[isvalidAmount,setIsValidAmount]=useState(true);

 if(cartCtx.amount<1 || cartCtx.amount>10){
    setIsValidAmount(false)
 }
 
  const price = "Rs "+`${props.price.toFixed(2)}`;

  return (
    <li className={classes["cart-item"]}>
      <div className={classes.itemDetails}>
        <img src={props.img} className={classes.image} />
        <div>
          <h2>{props.name}</h2>
          <div className={classes.summary}>
            <span className={classes.price}>{price}</span>
            <span className={classes.amount}>x {props.amount}</span>
          </div>
        </div>
      </div>

      <div className={classes.actions}>
        <div className={classes.actionsBtn}>
          <button onClick={props.onDecrease} className={isvalidAmount ? classes.validateBtn : ""}>−</button>
          <button onClick={props.onIncrease}>+</button>
        </div>
        <div className={classes.removeBtn} onClick={props.onRemove}>Remove</div>
      </div>
    </li>
  );
};

export default CartItem;
