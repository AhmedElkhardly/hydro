import React, { useEffect, useState } from 'react'
import './footer.css'
import cleander from '../../assets/images/cleander.svg'
import twitter from '../../assets/images/twitter.png'
import callus from '../../assets/images/callus.svg'
import { Link } from 'react-router-dom'
import { t } from 'i18next'
import { getSettings } from '../../APIs/home'
function Footer() {
    const [Setting, setSetting] = useState()
    useEffect(() => {
        ((async () => {
            const res = await getSettings()
            setSetting(res.data?.data)
        }
        )())
    }, [])
    console.log(Setting)
    return (

        <footer className='footerContainer '>
            <div className='bgs'></div>
            <div className='footerHeader '>
                <h5 className='  m-lg-0 mt-5 aboutCompanyTitle p-lg-3 px-0 ' style={{ fontWeight: '600' }}>{t(`You dream It, we do It`)}</h5>
                <h3 className='  aboutCompanyHeader text-white px-0 mx-0 mb-2'>{t('Don’t miss the opportunity to book the smartest bed')}</h3>
                <button className='  learnMore text-light m-0 p-0' > <span className=''>{t('book now')}</span> <img src={cleander} alt="" /></button>

            </div>
            <hr className='line' />
            <div className='row PageWrapper footerBottom'>
                <div className='col-lg-3 col-md-6 col-12 px-5 px-lg-0 px-md-2 '>
                    <img src={'./logo.svg'} className="img-fluid" alt="" />
                </div>
                <ul className='col-lg-3 col-md-6 col-12 px-5 px-lg-0 px-md-2'>
                    <h4>{t('explore')}</h4>
                    <li>{t('terms-and-conditions')}</li>
                    <li>{t('privacy-and-policy')}</li>
                </ul>
                <ul className='col-lg-3 col-md-6 col-12 px-5 px-lg-0 px-md-2'>
                    <h4>{t('Follow Us')}</h4>
                    <li> <Link target='_blank' to={Setting && `https://${Setting[0]?.facebook?.text}`}><img className='border rounded-circle p-1 me-2' src={Setting && Setting[0]?.facebook?.icon?.url} alt="" /><span>{Setting && Setting[0]?.facebook?.slug}</span> </Link></li>
                    <li><Link target='_blank' to={Setting && `https://${Setting[1]?.twitter?.text}`}><img className='border rounded-circle p-1 me-2' src={Setting && Setting[1]?.twitter?.icon?.url} alt="" /><span>{Setting && Setting[1]?.twitter?.slug}</span></Link></li>
                    <li><Link target='_blank' to={Setting && `https://${Setting[2]?.instagram?.text}`}><img className='border rounded-circle p-1 me-2' src={Setting && Setting[2]?.instagram?.icon?.url} alt="" /><span>{Setting && Setting[2]?.instagram?.slug}</span></Link></li>
                </ul>
                <ul className='col-lg-3 col-md-6 col-12 px-5 px-lg-0 px-md-2'>
                    <h4>{t('call-us')}</h4>
                    <li className='d-flex'>
                        <img className='px-3' src={callus} alt="" />
                        <div className='d-flex flex-column'>
                            <span className='phone'> <Link to={`tel:${Setting && Setting[3]?.phone?.text}`}>{Setting && Setting[3]?.phone?.text}</Link></span>
                            <span className='available'> {t('24/7 availability')}</span>
                        </div>
                    </li>
                </ul>
            </div>
            <hr className='line mt-0 mb-3' />

            <div className='footerDB pb-3'>
                <p className='text-center m-0 pb-3'>
                    {t("© 2023")} <Link to='https://www.dubisign.ae'>{t('Dubisign')} </Link>  {t("All Rights Reserved")}
                </p>
            </div>


        </footer>
    )
}

export default Footer