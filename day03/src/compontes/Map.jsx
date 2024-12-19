import React from 'react'

function Map({p}) {
  return (
    <div>
       <div>
    {
      p.map(product => (
        <div key={product.productName}>
        <div className='p-4'>
         {product.category}
          {product.productName}
          {product.price}
          </div>
        </div>
      ))
    }
    </div>
    </div>
  )
}

export default Map
