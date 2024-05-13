import {createSlice} from '@reduxjs/toolkit'

export const cartSlice=createSlice({
    name:"cart",
    initialState:{
        cartProductID:[],
    },
    reducers:{
        addToCart:(state,action)=>{
            state.cartProductID=[...state.cartProductID,action.payload]
        },
        removeFromCart:(state,action)=>{
            state.cartProductID = state.cartProductID.filter(id => id !== action.payload);
        },
        clearAllItems:(state)=>{
            state.cartProductID=[]
        },
    }
})

export const{addToCart,removeFromCart,clearAllItems}=cartSlice.actions

export default cartSlice.reducer