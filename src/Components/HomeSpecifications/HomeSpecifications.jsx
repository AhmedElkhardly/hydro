import React from 'react'
import image from '../../assets/images/3.png'
import image1 from '../../assets/images/4.png'
import slug from '../../assets/images/prze.png'
import './homeSpecefication.css'
function HomeSpecifications() {
    return (
        <section className='SectionWrapper SpecificationSectionContainer row '>
            <div className='col-lg-6 d-flex flex-column '>
                <div ><img className='smallImg' src={image} alt="" /></div>
                <h5 className='title'>Best Selling Finishes</h5>
                <h3 className='header'>We use materials only from personally verified suppliers</h3>
                <div className='slug'><img src={slug} alt="" /></div>
            </div>
            <div className='col-lg-6 m-lg-0 mt-5'>
                <div ><img className='mainImage' src={image1} alt="" /></div>
                <p className='maindescription'>Soft, matte wood texture, 200+ colors to choose from. Environmentally friendly materials, all certificates are available</p>
                <hr />
            </div>
        </section>
    )
}

export default HomeSpecifications