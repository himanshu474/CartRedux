import React from 'react'

const Sorting = ({setSort}) => {
  return (
    <div className='bg-gray-100 my-5 p-5 flex items-center justify-end'>
        <select onChange={e=>setSort(e.target.value)} className='bg-white py-3 px-5 rounded-xl' name="" id="">
            <option value="" disabled>
                Choose
            </option>
            <option value="inc" >
                incrementing
            </option>
            <option value="dec">
                decreasing
            </option>
        </select>
    </div>
  )
}

export default Sorting