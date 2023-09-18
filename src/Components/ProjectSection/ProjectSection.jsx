import React from 'react'
import './projectSection.css'
// import image from '../../assets/images/proj2.png'
// import arrow from '../../assets/images/arrow2.svg'
import { t } from 'i18next'


function ProjectSection({data}) {

    return (
        <>
            <section className='SectionWrapperm row  ProjSecContainer position-relative'>
                <div className='col-lg-6 col-12 headerText' style={{ zIndex: 99 }}>
                    <h5 className='  aboutCompanyTitle  ' style={{ fontWeight: '600' }}>{t(`our-project`)}</h5>
                    <h3 className='  aboutCompanyHeader'>{data?.Bed_details?.description}</h3>
                </div>
                <div className='col-12 position-relative projImgContainer' >
                    <img className='respImage w-100 ' src={data?.Bed_details?.image?.url} alt="" />
                    <div className='col-lg-8 bgsGray3 text-light' >.</div>
                </div>

            </section>
        </>
    )
}

export default ProjectSection