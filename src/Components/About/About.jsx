import React from 'react'
import arrow from '../../assets/images/arrow.svg'
import image from '../../assets/images/2.png'
import './about.css'
import { t } from 'i18next'
function About({ data }) {
    return (
        <section className='row AboutCompanyContainer'>
            <div className=' col-lg-6 d-flex flex-column justify-content-between'>
                <img style={{ objectFit: 'cover', height: '100%' }} src={data?.about_us?.image?.url} alt="" />
            </div>
            <div className='headertext d-flex flex-column col-lg-6 justify-content-center '>
                <h5 className='  m-lg-0 mt-5 aboutCompanyTitle pe-3 pe-lg-5 ' style={{ fontWeight: '600' }}>{t(`about-us`)}</h5>
                <h3 className='  aboutCompanyHeader'>{data?.about_us?.title}</h3>
                <p className=' aboutCompanyDescription pe-3 pe-lg-5 '>{data?.about_us?.description}</p>
                <button className='  learnMore text-light mb-0' > <span>{t('read-more')}</span> <img src={arrow} alt="" /></button>
            </div>


        </section>
    )
}

export default About