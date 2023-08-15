import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../../assets/meals.jpg';

import classes from './Header.module.css';

const Header = (props) => {
    const logo="https://www.codester.com/static/uploads/items/000/031/31302/preview/006.jpg"
  return (
    <Fragment>
      <header className={classes.header}>
       <div className={classes["header-titleBox"]}> 
        <img src={logo} className={classes["header-logo"]} />
        <div className={classes["header-title"]}><h2>FoodPoint</h2></div>
        </div>
        <HeaderCartButton showCartHandler={props.showCartHandler} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='A table full of delicious food!' />
      </div>
    </Fragment>
  );
};

export default Header;