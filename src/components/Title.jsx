import React from 'react'

const Title = ({title}) => {
  return (
    <div>
        <div className='w-full bg-black text-center h-23'>
            <h1 className='text-white pt-8'>{title}</h1>
        </div>
    </div>
  )
}

export default Title