import React from 'react'
// import image1 from '../../assets/images/4.png'
import slug from '../../assets/images/prze.png'
import './homeSpecefication.css'
import { t } from 'i18next'
function HomeSpecifications({data}) {

    return (
        <section className='SectionWrapper SpecificationSectionContainer row '>
            <div className='col-lg-6 d-flex flex-column '>
                <div ><img className='smallImg' src={data?.specifications?.left_image?.url} alt="" /></div>
                <h5 className='title'>{t('Best Selling Finishes')}</h5>
                <h3 className='header'>{data?.specifications?.title}</h3>
                <div className='slug'><img src={slug} alt="" /></div>
            </div>
            <div className='col-lg-6 m-lg-0 mt-5'>
                <div ><img className='mainImage' src={data?.specifications?.right_image?.url} alt="" /></div>
                <p className='maindescription'>{data?.specifications?.description}</p>
                <hr />
            </div>
        </section>
    )
}

export default HomeSpecifications