import React from 'react'
import LayOut from '../../Components/LayOut/LayOut'
import CarouselEffect from '../../Components/Carousel/Carousel'
import Category from '../../Components/Category/Category'
import AmProduct from '../../Components/AmProduct/AmProduct'
import Cart from '../Cart/Cart'

function Landing() {
  return(
    <LayOut>
      <CarouselEffect />
      <Category />
      <AmProduct />
    </LayOut>
    )
}

export default Landing