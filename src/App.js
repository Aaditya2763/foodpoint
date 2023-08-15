import { Fragment, useState } from 'react';
import './global.css'
import './index.css'

import Header from './components/Layout/Header/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/cartProvider';
function App() {
  const[cartIsShown,setCartIsShown]=useState(false);

  const showCartHandler=()=>{
    setCartIsShown(true);
  }

  const hideCartHandler=()=>{
    setCartIsShown(false);
  }
  return (
  
    <Fragment >
    <CartProvider>
      <Header  showCartHandler={showCartHandler}/>
    {cartIsShown && <Cart hideCartHandler={hideCartHandler}/>}
      
      <main>
      <Meals  hideCartHandler={hideCartHandler}/>
      </main>
      </CartProvider>
    </Fragment>
  );
}

export default App;