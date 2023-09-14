import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import arrow from '../../assets/images/arrow.svg'
import image from '../../assets/images/1.png'
import './header.css'

import React from 'react'

function HeaderSwiper() {
    return (
        <section className='HeaderContainer row'>
            <div className=' col-lg-6 d-flex flex-column justify-content-between'>
                <div className='headertext d-flex flex-column'>
                    <h1 className='containerWrapper headerTitle'>Make your life easier</h1>
                    <p className='containerWrapper '>Lorem Ipsum is simply dummy text of the printing and typesetting industry, Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <button className='containerWrapper  learnMore text-light fs-20' > <span>{('View specifications')}</span> <img src={arrow} alt="" /></button>
                </div>
                <div className='isolate d-lg-block d-none'>.</div>
            </div>
            <div className='col-lg-6'>
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    modules={[Navigation, Pagination]}
                    speed={500}
                    navigation

                >
                    <SwiperSlide>
                        <img style={{ objectFit: 'contain' }} src={image} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img style={{ objectFit: 'cover' }} src={image} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img style={{ objectFit: 'cover' }} src={image} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img style={{ objectFit: 'cover' }} src={image} alt="" />
                    </SwiperSlide>

                </Swiper>

            </div>
        </section >
    )
}

export default HeaderSwiper