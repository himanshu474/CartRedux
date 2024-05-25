import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    INCREASE_QUANTITY,
    DECREASE_QUANTITY,
  } from "./ActionTypes";
  import { initialState } from "./InitialState";

  const ProductInCart=(state,action)=>{
    return state.find((p)=>p.productId === action.payload.id)
  }

  const nextId=(state)=>{
    return state.reduce((id,state)=>Math.max(id,state.id),-1)+1;
  }

  