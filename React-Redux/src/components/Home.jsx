import React from 'react'
import AddProduct from './AddProduct'

const Home = () => {
  return (
   <main className='max-w-7xl mx-auto py-8 px-4'>
    <div className='grid sm:grid-cols-3 grid-cols-1 gap-8'>
        <div className=' col-span-2'>
          No Products Found
        </div>
        <div>
        <AddProduct/>
        </div>
    </div>
   </main>
  )
}

export default Home