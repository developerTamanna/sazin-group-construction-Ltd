import React from 'react'


const layout = ({children}) => {

  return (
    <div>
      <main className=' bg-white dark:bg-gray-800 w-full'>
        {children}
      </main>
    </div>
  )
}

export default layout