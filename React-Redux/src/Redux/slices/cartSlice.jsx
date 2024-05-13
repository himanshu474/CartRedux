import {createSlice} from '@reduxjs/toolkit'

export const cartSlice=createSlice({
    name:"cart",
    initialState:{
        carts:[],
        itemCount:0,
        totalAmount:0,
    },
    reducers:{
        addToCart:(state,action)=>{
            //check if the item is already in the cart
           const isItemCart=state.carts.find(
            (item)=>item.id === action.payload.id)

            //If the item is already in the cart
            if(isItemCart){
                //create a new array with updated quantities and total prices
                const tempCart=state.carts.map((item)=>{
                    if(item.id === action.payload){
                        //Calculate the new quantity and total price for the item
                        let tempQty=item.quantity + action.payload.quantity;
                        let tempTotalPrice=tempQty * item.price;//Fixed calculation here
                        //Return a new item Object with updated quantity and total price
                        return{
                            ...item,
                            quantity:tempQty,
                            totalPrice:tempTotalPrice,
                        }
                    }
                    else{
                        //If the item is not the one being updated, return it as it is
                        return item;
                    }
                })
                //Update the carts array with the new array
                state.carts=tempCart
            }else{
                //If the item is not already in the cart, add it to the next array
                state.carts.push(action.payload)
            }
        },
        removeFromCart:(state,action)=>{
            state.carts = state.carts.filter((item) => item.id !== action.payload);
        },
        clearCart:(state)=>{
            state.carts=[]
        },
        getCartTotal:(state)=>{
            state.totalAmount=state.carts.reduce((cartTotal,cartItem)=>{
                return (cartTotal += cartItem.price * cartItem.quantity)
            },0)
            state.itemCount=state.carts.length;
        },
    },
})

export const{addToCart,removeFromCart,clearCart,getCartTotal}=cartSlice.actions

export default cartSlice.reducer