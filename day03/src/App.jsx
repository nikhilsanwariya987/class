import React from 'react'
import products from './utility/Data';
import Flat from './compontes/Flat';

const App = ()=> {
  return (
    <div>
    <Flat products = {products}/>
    </div>
  )
}

export default App
