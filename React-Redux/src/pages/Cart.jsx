import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {getcartTotal} from '../Redux/slices/cartSlice'
import CartComp from '../components/cart/CartComp'

const Cart = () => {
// const navigate=useNavigate();
const dispatch=useDispatch()
const{carts,totalAmount,itemCount}=useSelector((state)=>state.carts)

useEffect(()=>{
    dispatch(getcartTotal())
},[dispatch])

  return (
    <div>
        {carts?.length>0 ?(
            <div>
                {carts?.map((cart,i)=>(
                    <CartComp key={i} cart={cart}/>
                ))}
                <div className='flex justify-end text-xl font-bold'>
                    TOTAL AMOUNT: <span className='text-green-600 text-2xl ml-2'>{totalAmount}TL</span>     
                </div>
            </div>
        ):(
            <div>Your cart is empty...</div>
        )}
    </div>
  )
}

export default Cart