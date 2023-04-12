import React from 'react'
import ArrivalHero from './ArrivalHero'
import Features from './Features'
import FilterSection from './FilterSection'
import Pagination from './Pagination'
import AboutUs from './AboutUs'
import Header from './Header'


const ProductPage = () => {
  return (
    <div>
    <Header />
        <ArrivalHero />   
        <FilterSection />
        <Pagination />
        <AboutUs />
    </div>
  )
}

export default ProductPage