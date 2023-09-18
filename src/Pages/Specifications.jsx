import React, { useEffect, useState } from 'react'
import ProjectHeader from '../Components/ProjectHeader/ProjectHeader'
import ProductSpecification from '../Components/ProductSpecification/ProductSpecification'
import { getProduct } from '../APIs/product'
import StaticsDetails from '../Components/StaticsDetails/StaticsDetails'
import ProductOverview from '../Components/ProductOverview/ProductOverview'
import SpecificationsCarsoul from '../Components/SpecificationsCarsoul/SpecificationsCarsoul'
function Specifications() {
  const [product, setProduct] = useState('')

  useEffect(() => {
    (async () => {
      const res = await getProduct()
      setProduct(res?.data?.data)
    })()
  }, [])

  return (
    <section className='row spesContainer'>
      <div className='col-lg-6 col-12 order-2 order-lg-1 '>
        <ProjectHeader title={product.title} description={product.description} review={product.review} />
        <ProductSpecification data={product} />
        <StaticsDetails size={product?.size} />
        <ProductOverview overview={product?.overview} />
      </div>
      <div className='col-lg-6 col-12  order-1 order-lg-2 bg-petro' >
        <SpecificationsCarsoul images={product?.image} />

      </div>
    </section>
  )
}

export default Specifications