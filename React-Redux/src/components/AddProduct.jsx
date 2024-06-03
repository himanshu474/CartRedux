import React from 'react'

const AddProduct = () => {
  return (
    <div >
        <h4>Add New Product</h4>
        <form className='space-y-4 text-white'>
            <div className='space-y-2'>
                <label>Product Name</label>
                <input type="text" name="name" id="name" className='addProductInput'/>
            </div>
        </form>
    </div>
  )
}

export default AddProduct