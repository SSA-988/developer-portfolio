import React from 'react'

function Skill({item}) {
  return (
    <div className=''>
        <p className='text-white text-left'>{item?.type}</p>
        <div className='w-full bg-gray-700 rounded-full h-2.5'>
            <div style={{width:item?.progress}} className='bg-green-600 h-2.5 rounded-full'>

            </div>
        </div>
    </div>
  )
}

export default Skill