import React from 'react'
import './ProductSpecification.css'
import sun from '../../assets/images/sun.svg'
import { t } from 'i18next'
function ProductSpecification({ data }) {
    return (
        <section className='PageWrapper productSpecf mt-4'>
            <div className='price mb-3'>
                <h1>{'$' + data?.new_price ?? '-'} </h1>
                <span className='oldPrice'>{'$' + data?.price ?? '-'}</span>
                <span className='offer'>{data?.offer + '%' + t('off')}</span>
            </div>
            <hr />
            <div className='mb-4'>
                <h4 className='mb-3 mt-4 fw-bold'>{t('Product Specification')}</h4>
                {data?.specifications?.map((specific, i) => (
                    <div key={i} className='d-flex align-items-center mb-3'>
                        <img style={{ width: '20px', marginInlineEnd: '10px' }} src={sun} alt="" />
                        <span>{specific?.description}</span>
                    </div>
                ))}
            </div>
            <hr />

        </section>
    )
}

export default ProductSpecification