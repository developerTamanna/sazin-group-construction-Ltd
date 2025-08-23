import React from 'react'
import Link from 'next/link'
 const option=[
    {
        name:'Sky Helmet',
        link:'/Product-Base-Services/Sky-Helmet&Safety-Accessories/Sky-Helmet'
    },
    {
        name:'Safety Accessories',
        link:'/Product-Base-Services/Sky-Helmet&Safety-Accessories/Safety-Accessories'
    },
 ]
function Navbar() {
  return (
    <nav className='bg-black dark:bg-white dark:text-black text-white px-4 py-1 '>
        <ul className='flex justify-center items-center gap-10'>

            {
                option.map((item)=>{
                    return <li key={item.name}className=''>
                        <Link className='link' href={item.link}>
                          {item.name}
                        </Link>
                        </li>

                })
            }
        </ul>
    </nav>
  )
}

export default Navbar