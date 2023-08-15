import { useContext } from 'react';
import Modal from '../Ui/Cards/Modal';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import MealItem from '../Meals/MealItems/MealItem';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartCtx=useContext(CartContext)
  const totalAmount=cartCtx.totalAmount.toFixed(2);
const cartItemRemoveHandler=(id)=>{
cartCtx.removeItem(id);
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
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>Rs.{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.hideCartHandler}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
      </Modal>
  );
};

export default Cart;