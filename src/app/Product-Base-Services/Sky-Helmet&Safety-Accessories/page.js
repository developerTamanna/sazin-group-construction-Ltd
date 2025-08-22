import React from 'react'
import Banner from './components/Banner'
import ProductCard from './components/ProductCard'
import Category from './components/CategoryCard'
import {AnimatedSection2,AnimatedSection} from '@/utils/ScrollMontion'

function SkyHelmetsAndAccessories() {
  return (
    <section>
      <div>
        <Banner />
      </div>
          <section className="dark:bg-black/70 py-16 px-4 lg:px-10 overflow-hidden">
          <AnimatedSection2>
            <h2 className="text-center w-full text-4xl font-bold text-white mb-12">
              DISCOVER OUR CATEGORIES
            </h2>
            </AnimatedSection2>
            <AnimatedSection>
             <Category/>
            </AnimatedSection>
          </section>

      <section>
        <ProductCard />
      </section>
    </section>
  )
}

export default SkyHelmetsAndAccessories
