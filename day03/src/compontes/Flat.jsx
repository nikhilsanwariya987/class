import React from 'react'
import Map from './Map';

const  Flat = ({products})=> {
    const p = products.flatMap((product) =>(
        product.productName.map((item) =>({
            category: product.category, productName: item,price:product.price,
        }))
    ));
  return (
    <>
    <Map p ={p} />
    </>
  )
}

export default Flat
