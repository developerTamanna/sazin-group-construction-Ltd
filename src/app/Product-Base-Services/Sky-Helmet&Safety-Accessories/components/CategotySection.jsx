'use client'
import React,{ useEffect, useRef, useState } from 'react'
import Helmetsads from './Helmetsads'
import {AnimatedSection2,AnimatedSection} from '@/utils/ScrollMontion'
import Category from './CategoryCard'
function CategotySection() {
const [helmHeight, setHelmHeight] = useState(0);
const helmRef = useRef();
useEffect(() => {
  setHelmHeight(helmRef.current.offsetHeight);
}, [helmRef.current]);

  return (
   <>
           <div ref={helmRef} className='z-[40] relative'>

              <Helmetsads />
            </div>
          <section className="relative z-[50] dark:bg-black/40 pb-16 px-4 lg:px-10 overflow-hidden flex flex-col items-center justify-center w-full"

            style={{ marginTop: `-${helmHeight}px`, paddingTop: `${helmHeight/2}px` }}

          >
            <AnimatedSection2>
                <h2 className="text-center w-full text-4xl font-bold text-white mb-12">
                  DISCOVER OUR CATEGORIES
                </h2>
              </AnimatedSection2>
              <AnimatedSection>
                <Category/>
              </AnimatedSection>
         </section>
   </>
  )
}

export default CategotySection