import React from 'react'
import Card from './components/Card'
import products from './utilite/Data'
const App =()=> {
    return (
    <div className='flex flex-wrap'>
    <Card products ={products}/>
    </div>
  )
}
export default App
