import React from 'react'
import Banner from './components/Banner'
import ProductCard from './components/ProductCard'
import CategotySection from './components/CategotySection'


function SkyHelmetsAndAccessories() {
  return (
  <section>
      <div>
        <Banner />
      </div>
      <div className='w-full relative h-auto'>
          <CategotySection />
      </div>
{/*         <section>
          <ProductCard />
        </section> */}
    </section>
  )
}

export default SkyHelmetsAndAccessories
