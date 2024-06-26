import { useParams } from "react-router-dom"
import Layout from "../../Components/Layout/Layout"
import { useEffect, useState } from "react"
import axios from "axios"
import ProductCard from "../../Components/Product/ProductCard"
import Spinner from "../../Components/Loading/Spinner"

function ProductDetail() {
    const {productId} = useParams()
    const [product, setProduct] = useState({});
    const [isLoading, setIsLoading] = useState(false)
    useEffect(()=>{
      setIsLoading(true)
        axios.get(`https://fakestoreapi.com/products/${productId}`)
        .then(res => {
          setProduct(res.data)
          setIsLoading(false)
        })
        .catch(err => {
          setIsLoading(false);
          console.log(err)
        })
    },[])
    console.log(product)
  return (
    <Layout>
    {isLoading ? (<Spinner/>) :(
        <ProductCard product={product} flag/>
    )}
    </Layout>
  )
}

export default ProductDetail