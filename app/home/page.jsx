import React from 'react'
import SliderComponent from '../components/SliderComponent'
import Categories from '../components/Categories'
import NewArrivels from '../components/NewArrivels'
import TopSeller from '../components/TopSeller'

const HomePage = () => {
  return (
    <div>
<SliderComponent/>
<Categories/>
<NewArrivels/>
<TopSeller/>
    </div>
  )
}

export default HomePage