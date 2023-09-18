import React, { useEffect, useState } from 'react'
import './sponsers.css'
import spo2 from '../../assets/images/spo2.png'
import { getBrand } from '../../APIs/home'
import { t } from 'i18next'

function Sponsers() {

    const [Brands, setBrands] = useState()

    useEffect(() => {
        (async () => {
            const res = await getBrand();
            setBrands(res.data.data)
        })()
    }, [])

    return (
        <section className='SectionWrapper sponserContainer'>
            <div className='col-lg-6 text'>
                <span className='years'>{t('25 Years')}  </span>
                <span className='sponserTitle'>
                   {t('we have created confidence in our track')}
                </span>
            </div>
            <div className='d-flex flex-wrap justify-content-start col-lg-12'>
                {Brands?.map((brand) => {
                    console.log(brand)
                    return (
                        <div key={brand?.icon?.id}>
                            <img className='logo m-lg-5 m-3' style={{ width: '150px' }} src={brand?.icon?.url} alt="" />
                        </div>
                    )
                })}
            </div>

        </section>
    )
}

export default Sponsers