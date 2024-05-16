import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {getCartTotal} from '../Redux/slices/cartSlice'
import CartComp from '../components/cart/CartComp'

const Cart = () => {
const dispatch=useDispatch()
const{carts,totalAmount}=useSelector((state)=>state.carts)

useEffect(()=>{
    dispatch(getCartTotal())
},[dispatch])

  return (
    <div>
        {carts?.length>0 ?(
            <div>
                {carts?.map((cart,i)=>(
                    <CartComp key={i} cart={cart}/>
                ))}
                <div className='flex justify-end text-xl font-bold'>
                    TOTAL AMOUNT: 
                    <span className='text-green-600 text-2xl ml-2'>{totalAmount}Rs</span>     
                </div>
            </div>
        ):(
            <div>Your cart is empty...</div>
        )}
    </div>
  )
}

export default Cart