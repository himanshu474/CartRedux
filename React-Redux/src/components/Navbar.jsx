import React,{useEffect} from 'react'
import { BiSearch } from 'react-icons/bi'
import { AiOutlineHeart } from 'react-icons/ai'
import { SlBasket } from 'react-icons/sl'
import { useDispatch,useSelector } from 'react-redux'
import { getcartTotal } from '../Redux/slices/cartSlice'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
const navigate=useNavigate();
const dispatch=useDispatch();
const{itemCount}=useSelector((state)=>state.carts)

useEffect(()=>{
dispatch(getcartTotal());
},[dispatch])

  return (
    //Main Navbar
    <div className='flex justify-between items-center my-2 py-2'>
        {/* //left Navbar */}
        <div className='text-6xl mx-12 cursor-pointer'
        onClick={()=>navigate("/")}>Shopsy</div>
        {/* //right Navbar */}
        <div className='flex items-center gap-8 mx-12'>
            <div className='flex items-center border p-3 rounded-full bg-gray-100'>
                <input
                className='bg-gray-100 outline-none'
                type="text"
                placeholder='Search...'
                />
                <BiSearch size={28} className='hover:animate-pulse'/>
            </div>
            <AiOutlineHeart size={28}/>
            <div onClick={()=>navigate("cart")}
            className='relative'>
                <div className='absolute -top-3 -right-3 bg-red-500
                text-white rounded-full w-5 h-5 flex items-center justify-center'>
                    {itemCount}
                </div>
                <SlBasket size={28} className='cursor-pointer'/>
            </div>
        </div>
    </div>
  )
}

export default Navbar