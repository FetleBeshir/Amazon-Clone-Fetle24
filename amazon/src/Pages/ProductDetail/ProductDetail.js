import React, { useEffect, useState } from 'react'
import classes from './ProductDetail.module.css'
import LayOut from '../../Components/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../Api/endPoints'
import AmProductCard from '../../Components/AmProduct/AmProductCard'
import Loader from '../../Components/Loader/Loader'


function ProductDetail() {
  const  [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false)
  const { productId } = useParams();

  useEffect(() => {
    setIsLoading(true)
    axios.get(`${productUrl}/products/${productId}`)

    .then((res) => {
      setProduct(res.data);
      setIsLoading(false)
    }).catch((err) => {
      console.error('Error feaching product:', err);
      setIsLoading(false)
    })
  }, [productUrl,productId])
console.log(product);
  return(
  <LayOut>
    {isLoading? (<Loader />):(<AmProductCard 
    product={product} 
    flex = {true}
    renderDesc = {true}
    renderAdd={true}
    />)}
 
  </LayOut>
  )
}

export default ProductDetail