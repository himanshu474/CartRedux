import React,{useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {getcategoryProduct,getProduct} from '../../Redux/slices/productSlice'
import Loading from '../Loading'
import Product from './Product'
import ReactPaginate from 'react-paginate'

const Products = ({category,sort}) => {
const dispatch=useDispatch();
const{products,productStatus}=useSelector((state)=>state.products)
const[itemsOffset,setItemOffset]=useState(0)

const itemsPerPage=6;
const endOffset=itemsOffset + itemsPerPage;
const currentItems=products.slice(itemsOffset,endOffset)
const pageCount =Math.ceil(products.length/itemsPerPage)

const handlePageClick=(e)=>{
    const  newOffset=(e.selected * itemsOffset.itemsPerPage) % products.length;
    setItemOffset(newOffset)
}

useEffect(()=>{
    if(category) dispatch(getcategoryProduct(category))
        else dispatch(getProduct())
},[dispatch,category])

  return (
    <div>
        {productStatus === "LOADING" ?(
            <Loading/>
        ):(
            <>
            <div className='flex flex-wrap justify-centeritems-center'>
                {currentItems
                ?.sort((a,b)=>sort === "inc" ? a.price -b.price :sort === "dec" ?b.price - a.price :null)
                ?.map((product,index)=>(
                    <Product key={index} product={product}/>
                ))
                }
            </div>
            <ReactPaginate
            className='paginate'
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
            />
            </>
        )}
    </div>
  )
}

export default Products