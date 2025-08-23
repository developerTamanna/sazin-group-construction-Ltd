import React from 'react'
import Navbar from './components/Navbar'


const layout = ({children}) => {

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        {children}
      </main>
    </div>
  )
}

export default layout