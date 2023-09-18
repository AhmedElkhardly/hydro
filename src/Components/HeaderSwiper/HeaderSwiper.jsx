import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import arrow from '../../assets/images/arrow.svg'
import image from '../../assets/images/1.png'
import './header.css'

import React, { useEffect, useState } from 'react'
import { getSlider } from '../../APIs/home';
import { t } from 'i18next';

function HeaderSwiper() {
    const [slider, setSlider] = useState()

    useEffect(() => {
        (async () => {
            const res = await getSlider();
            setSlider(res.data.data)
        })()
    }, [])

    return (
        <section className='HeaderContainer row'>
            <div className=' col-lg-6 d-flex flex-column justify-content-between'>
                <div className='headertext d-flex flex-column'>
                    <h1 className='containerWrapper headerTitle'>{slider && slider[0]?.title}</h1>
                    <p className='containerWrapper '>{slider && slider[0]?.description}</p>
                    <button className='containerWrapper  learnMore text-light fs-20' > <span>{t('view-specifications')}</span> <img src={arrow} alt="" /></button>
                </div>
                <div className='isolate d-lg-block d-none'>.</div>
            </div>
            <div className='col-lg-6'>
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    modules={[Navigation, Pagination]}
                    speed={500}
                    navigation>
                    {slider && slider[0]?.image?.map((swipe) => (
                        <SwiperSlide key={swipe?.id}>
                            <img style={{ objectFit: 'contain' }} src={swipe?.url} alt="" />
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </section >
    )
}

export default HeaderSwiper