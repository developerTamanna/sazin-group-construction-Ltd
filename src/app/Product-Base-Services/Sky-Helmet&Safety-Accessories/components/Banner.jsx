'use client'

import React from 'react'
const Banner = () => {
  return (
    <div>
      <div className='w-full h-[400px] bg-[url("/helmetbanner.jpg")] bg-cover bg-center'>
        <div className='w-full h-full bg-[#00000080] flex flex-col items-center justify-center'>
          <h1 className='text-4xl font-bold text-white'>Sky Helmet & Safety Accessories</h1>
        </div>
      </div>

    </div>
  )
}

export default Banner
