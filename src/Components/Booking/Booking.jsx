import React from 'react'
import image1 from '../../assets/images/project.png'
import './booking.css'
import arrow from '../../assets/images/arrow.svg'
import { t } from 'i18next'


function Booking({ data }) {

    return (
        <section className='SectionWrapperm bookingContainer row position-relative ' >
            <div className='headertext d-flex flex-column col-lg-6 justify-content-center ' >
                <h5 className='  m-lg-0 mt-5 aboutCompanyTitle  ' style={{ fontWeight: '600' }}>{t(`book your hydraulic bed`)}</h5>
                <h3 className='  aboutCompanyHeader'>{data?.Design_consultation?.title}</h3>
                <p className=' aboutCompanyDescription  '>{data?.Design_consultation?.description}</p>
                <button className='learnMore text-light mb-0 w-auto px-4' > <span style={{ fontWeight: '400' }}>{t('book now')}</span> <img src={arrow} alt="" /></button>
            </div>
            <div className='col-lg-0 col-12 '  ><img className='respImage w-100 ' src={image1} alt="" /></div>

            <div className='position-absolute ' style={{ left: '53%', width: '47.5vw', bottom: '-19%' }}><img className='mainImage' src={data?.Design_consultation?.image?.url} alt="" /></div>

        </section>
    )
}

export default Booking