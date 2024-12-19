import React from 'react'
import categories from './../utilits/Data';

function Mal({categories}) {
  return (
    <>
        <div className='flex flex-wrap bg-gradient-to-t bg-indigo-400 h-screen w-screen gap-5  '>
            {
                categories.map(category => (
                    
        <div  className=' p-6 left-28 m-5 '>
         <div className='bg-red-600 w-80 h-24 flex'>
        <h1 className='bg-black rounded-full text-xl text-white h-14 w-16 relative top-4 p-3 ml-3 text-center'>{category.id}</h1>
        <div className={`${category.bgcolor} w-full relative left-10`}>
        <p className='relative top-4 left-16 text-xl font-bold text-white'>
      {category.name}
       </p>
       <div className='relative top-4 left-8 text-xl font-bold text-white flex gap-1'>{category.items.map((x)=>(
       <div className='' >{x}</div>
       ))}</div>
    </div>
    </div>
   
    </div>
    
                ))
            }
        </div>
    </>
  )
}

export default Mal
