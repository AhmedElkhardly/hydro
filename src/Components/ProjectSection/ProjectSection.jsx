import React from 'react'
import './projectSection.css'
import image from '../../assets/images/proj2.png'
import arrow from '../../assets/images/arrow.svg'


function ProjectSection() {
    return (
        <section className='SectionWrapperm row  ProjSecContainer position-relative'>
            <div className='col-lg-6 col-12 headerText' style={{zIndex:99}}>
                <h5 className='  aboutCompanyTitle  ' style={{ fontWeight: '600' }}>{(`our project`)}</h5>
                <h3 className='  aboutCompanyHeader'>{'Explore our  hydraulic bed design'}</h3>
            </div>
            <div className='col-12 position-relative' style={{zIndex:99}} >
                <img className='respImage w-100 ' src={image} alt="" />
            </div>
            <div className='position-absolute h-100 d-flex justify-content-end flex-column  align-items-center' style={{ zIndex: 9, left: '53%', bottom: '-30%', top: '0', width: '47.5vw', background: '#F5F5F5' }}>
                <button>View design  <img src={arrow} alt="" /></button>
            </div>

        </section>
    )
}

export default ProjectSection