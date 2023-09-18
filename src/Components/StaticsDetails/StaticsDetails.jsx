import React from 'react'
import './StaticsDetails.css'
import icon1 from '../../assets/images/specic1.svg'
import icon2 from '../../assets/images/specic2.svg'
import icon3 from '../../assets/images/specic3.svg'
import arr from '../../assets/images/arr.svg'
import arrflip from '../../assets/images/arrflip.svg'
import i18next, { t } from 'i18next'

function StaticsDetails({ size }) {
    return (
        <section className='PageWrapper'>
            <h4 className='fw-bold'>{t("What we offer")}</h4>
            <div className='row gap-3 justify-content-between flex-wrap mb-4'>

                <div className="col-lg-3  flex-grow-1 bg-light rounded p-3 text-center d-flex flex-column justify-content-center align-items-center ">
                    <div className='bg-white cardiconWrapper'>
                        <img className='cardicon' src={icon1} alt="" />
                    </div>
                    <p className="cardbody">{t('Free shipping where ever you are')}</p>
                </div>
                <div className="col-lg-3  flex-grow-1 bg-light rounded p-3 text-center d-flex flex-column justify-content-center align-items-center ">
                    <div className='bg-white cardiconWrapper'>
                        <img className='cardicon' src={icon2} alt="" />
                    </div>
                    <p className="cardbody">{t('Free Professional worker to assembly')}</p>
                </div>
                <div className="col-lg-3  flex-grow-1 bg-light rounded p-3 text-center d-flex flex-column justify-content-center align-items-center ">
                    <div className='bg-white cardiconWrapper'>
                        <img className='cardicon' src={icon3} alt="" />
                    </div>
                    <p className="cardbody">{t('3 years production warranty')}</p>
                </div>
            </div>
            <hr />
            <section className='mt-4 '>

                <h4 className='mb-3 fw-bold'>{t('Available Color')}</h4>
                <div className='row '>
                    <div className='col-lg-2 col-4 d-flex flex-column justify-content-center align-items-center'>
                        <div className='ball1 '></div>
                        <div className='colorname'>{t('Light gray')}</div>
                    </div>
                    <div className='col-lg-2 col-4 d-flex flex-column justify-content-center align-items-center '>
                        <div className='ball2 '></div>
                        <div className='colorname'>{t('Blue gray')}</div>
                    </div>
                    <div className='col-lg-2 col-4 d-flex flex-column justify-content-center align-items-center'>
                        <div className='ball3 '></div>
                        <div className='colorname'>{t('Greige')}</div>
                    </div>
                    <div className='col-lg-2 col-4 d-flex flex-column justify-content-center align-items-center'>
                        <div className='ball4 '></div>
                        <div className='colorname'>{t('Dark grey')}</div>
                    </div>
                    <div className='col-lg-2 col-4 d-flex flex-column justify-content-center align-items-center'>
                        <div className='ball5 '></div>
                        <div className='colorname'>{t('Mint green')}</div>
                    </div>
                    <div className='col-lg-2 col-4 d-flex flex-column justify-content-center align-items-center'>
                        <div className='ball6 '></div>
                        <div className='colorname'>{t('Light pink')}</div>
                    </div>
                </div>
            </section>

            <section>
                <h4 className='mt-4 mb-3 fw-bold'> {t('Available Size')}</h4>
                <div className='row'>
                    {size?.map((single, i) => (
                        <div key={i} className='col-lg-5 d-flex flex-grow-1 m-2 ms-0 rounded bg-light p-3'>
                            <h5 className='mx-2 fw-bold'>{single?.size}</h5>
                            <span>({single?.height + '*' + single?.width})</span>
                        </div>
                    ))}
                </div>
            </section>

            <section className='mt-4 mb-4 '>
                <div className='row callussect rounded'>
                    <img className='col-lg-3 col-md-2 ms-3 d-none d-md-none d-lg-block d-md-block' src={i18next.language === 'en' ? arr : arrflip} style={{ width: '60px', padding: 'auto 20px' }} alt="" />
                    <span className='col-lg-8 col-md-10 col-12 px-2'>{t('You can imagine the size and color as you like and we will do it for you, call us at')} <span className='number m-0 p-0'>+50-621-158-8994</span></span>
                </div>
            </section>
            <hr />
        </section>
    )
}

export default StaticsDetails