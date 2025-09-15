import React from 'react'
import Navbar from './components/Navbar'


const layout = ({children}) => {

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className=' bg-white dark:bg-gray-800 w-full'>
        {children}
      </main>
    </div>
  )
}

export default layout