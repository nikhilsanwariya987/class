import React from 'react'
import products from './../utilite/Data';

const Card = ({products}) => {
  return (
   <>
    {
        products.map((product) => (
            <div className='w-72 bg-red-500 m-10 rounded-2xl p-8 '>
      <h1 className='text-center text-2xl mb-3 text-white '>{product.name}</h1>
      <div>
        <img  className = "w-full  rounded-xl"src={product.image}></img>
        </div>
      <div className='flex space-x-2 mt-5'>
        <button className='rounded-2xl w-40 h-20 bg-green-600 p-7 text-white text-xl'>Add</button>
        <button className='rounded-2xl w-40 h-20 bg-red-600 p-7 text-white text-xl'>Delete</button>
      </div>
    </div>
        ))}
    
   </>
  )
}

export default Card
