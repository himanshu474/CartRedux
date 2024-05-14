import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import {STATUS} from '../../utlis/status';

const initialState={
    products:[],
    productStatus:STATUS.IDLE,
    productDetails:[],
    productDetailStatus:STATUS.IDLE,
}

export const getProduct=createAsyncThunk("getproducts",async()=>{
    const response=await fetch("https://fakestoreapi.com/products")
    const data=response.json();
    return data;
})

export const getcategoryProduct=createAsyncThunk(
    "getcategoryproduct",
    async(product)=>{
        const response=await fetch(
            `"https://fakestoreapi.com/products/category/${product}`
        )
        const data=response.json();
        return data;
    }
)

export const getDetailProduct=createAsyncThunk(
    "getdetailproduct",
    async(id)=>{
        const response=await fetch(
            `"https://fakestoreapi.com/products/${id}`
        )
        const data=response.json();
        return data;
    }
)

const productSlice=createSlice({
    name:"products",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getProduct.pending,(state)=>{
            state.productStatus=STATUS.LOADING
        })
        .addCase(getProduct.fulfilled,(state,action)=>{
            state.productStatus=STATUS.SUCCESS
            state.products=action.payload
        })
        .addCase(getProduct.rejected,(state)=>{
            state.productStatus=STATUS.FAIL
        })
        .addCase(getDetailProduct.pending,(state,action)=>{
            state.productDetailStatus=STATUS.LOADING
        })
        .addCase(getDetailProduct.fulfilled,(state,action)=>{
            state.productDetailStatus=STATUS.SUCCESS
            state.productDetails=action.payload
        })
        .addCase(getDetailProduct.rejected,(state)=>{
            state.productDetailStatus=STATUS.FAIL
        })
        .addCase(getcategoryProduct.pending,(state)=>{
            state.productStatus=STATUS.LOADING
        })
        .addCase(getcategoryProduct.fulfilled,(state,action)=>{
            state.productStatus=STATUS.LOADING
            state.products=action.payload
        })
        .addCase(getcategoryProduct.rejected,(state)=>{
            state.productStatus=STATUS.FAIL
        })
        },
})

export default productSlice.reducer