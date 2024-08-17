import React from 'react'
import { mainCarousalData } from './MainCarousalData'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css';

const MainCarousal = () => {

    const items = mainCarousalData.map((item)=> <img className='cursor-pointer' role='presentation' src={item.image} alt=""/>)

  return (
    <div>
         <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={3000}
        infinite
        
        
    />
    </div>
  )
}

export default MainCarousal