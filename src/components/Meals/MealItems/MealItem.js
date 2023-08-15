import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import { useContext } from 'react';
import CartContext from '../../../store/cart-context';



const MealItem = (props) => {
  const price = `${props.price.toFixed(2)}`;
const cartCtx=useContext(CartContext);

const onAddToCartHandler=(amount)=>{

cartCtx.addItem({
  id:props.id,
  img:props.img,
  name:props.name,
  amount:amount,
  price:props.price,
})
}


  return (
    <li className={classes.meal}>
        <div className={classes["meal-mealDescBox"]}>
        <img src={props.img} className={classes.img} />
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>Rs {price}</div>
      </div>
        </div>
      <div className={classes.formSection}>
        <MealItemForm id={props.id} onAddToCart={onAddToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;