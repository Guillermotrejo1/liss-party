import React from 'react'

function Banner({title}) {
  return (
    <div className='banner'>
        <h1 className='banner__title'>{title}</h1>
    </div>
  )
}

export default Banner