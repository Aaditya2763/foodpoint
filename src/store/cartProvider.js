import React, { useReducer } from 'react'
import CartContext from './cart-context'


const initialCartState={
    items:[],
    totalAmount:0
 }
 const cartReducer = (state, action) => {
    if (action.type === 'ADD_ITEM') {
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
      
        const existingCartItemIndex = state.items.findIndex(
          (item) => item.id === action.item.id
        );
        const existingCartItem = state.items[existingCartItemIndex];
      
        let updatedItems;
      
        if (existingCartItem) {
          const updatedItem = {
            ...existingCartItem,
            amount: existingCartItem.amount + action.item.amount,
          };
          updatedItems = [...state.items];
          updatedItems[existingCartItemIndex] = updatedItem;
        } else {
          updatedItems = [...state.items, action.item]; // Concatenate the new item
        }
      
 
     return {
       items: updatedItems,
       totalAmount: updatedTotalAmount,
     };
   }
   if (action.type === 'DECREASE_ITEM') {
     const existingCartItemIndex = state.items.findIndex(
       (item) => item.id === action.id
     );
     const existingItem = state.items[existingCartItemIndex];
     const updatedTotalAmount = state.totalAmount - existingItem.price;
     let updatedItems;
     if (existingItem.amount === 1) {
       updatedItems = state.items.filter(item => item.id !== action.id);
     } else {
       const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
       updatedItems = [...state.items];
       updatedItems[existingCartItemIndex] = updatedItem;
     }
 
     return {
       items: updatedItems,
       totalAmount: updatedTotalAmount
     };
   }
   if (action.type === 'INCREASE_ITEM') {

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount + existingCartItem.price ;
    let updatedItems;
    if(existingCartItem){
        const updatedItem = { ...existingCartItem, amount: existingCartItem.amount +1 };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
    }
  

 return {
   items: updatedItems,
   totalAmount: updatedTotalAmount,
 };
}

   if (action.type === 'REMOVE_ITEM') {
    
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
  
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = 0;
   
    let updatedItems;
    if (existingItem) {
      updatedItems = state.items.filter(item => item.id !== action.id);
    } 

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
  }
  
    return initialCartState;
    }

   


const CartProvider = (props) => {

    const[cartState,dispatchCartAction]=useReducer(cartReducer,initialCartState)

    const addItemHandler=(item)=>{
dispatchCartAction({type:'ADD_ITEM',item:item})
    }

    const decreaseItemHandler=(id)=>{
 dispatchCartAction({type:'DECREASE_ITEM',id:id})
    }
    const increaseItemHandler=(id)=>{
        dispatchCartAction({type:'INCREASE_ITEM',id:id})
           }

    const removeItemHandler=(id)=>{
        dispatchCartAction({type:'REMOVE_ITEM',id:id})
           }
           
const cartContext={
    items:cartState.items,
    totalAmount:cartState.totalAmount,
    addItem:addItemHandler,
    decreaseItem:decreaseItemHandler,
    removeItem:removeItemHandler,
    increaseItem:increaseItemHandler
}

  return (
   <CartContext.Provider value={cartContext}>
    {props.children}
   </CartContext.Provider>  
  )
}

export default CartProvider