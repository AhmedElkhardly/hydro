import React from 'react'
import arrow from '../../assets/images/arrow.svg'
import image from '../../assets/images/2.png'
import './about.css'
function About() {
    return (
        <section className='row AboutCompanyContainer'>
            <div className=' col-lg-6 d-flex flex-column justify-content-between'>
                <img style={{objectFit:'cover', height:'100%'}} src={image}  alt="" />
            </div>
            <div className='headertext d-flex flex-column col-lg-6 justify-content-center '>
                <h5 className='  m-lg-0 mt-5 aboutCompanyTitle pe-3 pe-lg-5 ' style={{ fontWeight: '600' }}>{(`About us`)}</h5>
                <h3 className='  aboutCompanyHeader'>{'Creative solutions by professional designers'}</h3>
                <p className=' aboutCompanyDescription pe-3 pe-lg-5 '>Your Lorem Ipsum is simply dummy text of the printing and typesetting industry, Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <p className=' aboutCompanyDescription pe-3 pe-lg-5 '>Your Lorem Ipsum is simply dummy text of the printing and typesetting industry, Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <button className='  learnMore text-light mb-0' > <span>{('Read more')}</span> <img src={arrow} alt="" /></button>
            </div>


        </section>
    )
}

export default About