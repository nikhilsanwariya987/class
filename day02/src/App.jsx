import React from 'react'
import categories from './utilits/Data'
import Mal from './compontes/Mal'

function App() {
  return (
    <>
        <div>
            <Mal categories = {categories}/>
        </div>
    </>
  )
}

export default App
