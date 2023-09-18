import React, { useEffect, useState } from 'react'
import './system.css'
import img1 from '../../assets/images/sys1.png'
import img2 from '../../assets/images/sys2.png'
import icon from '../../assets/images/Icon.svg'
import icon2 from '../../assets/images/icon2.svg'
import iconn from '../../assets/images/iconn.png'
import { getOverView, getProductDetails } from '../../APIs/home'
import { t } from 'i18next'


function System() {
    const [productDetails, setproductDetails] = useState()
    const [Overview, setOverview] = useState()

    useEffect(() => {
        (async () => {
            const res = await getProductDetails();
            setproductDetails(res.data.data)
            const res2 = await getOverView();
            setOverview(res2.data.data)

        })()
    }, [])

    console.log(Overview)

    return (
        <section>
            <section className='row sysSec1 '>
                <div className='col-lg-8 bgsGray' ></div>
                <div className='col-lg-6 sysText1 SectionWrapper' >
                    <h5 className='sysTextTitle' style={{ fontWeight: '600' }}>{t(`system`)}</h5>
                    <h3 className='sysTextHeader'>{t('High designed quality.')}</h3>
                    <p className='sysTextDescription'>{productDetails?.description}</p>
                    {productDetails?.details?.map((detail, index) => (
                        <div key={index}>
                            <div className='d-flex align-items-start'>
                                <img style={{ width: '42px', marginInlineEnd: '30px' }} src={detail?.icon?.url} alt="" />
                                <p className=' sysTextDescription w-75'>
                                    {detail?.description}
                                </p>
                            </div>
                            {index !== (productDetails?.details?.length - 1) && <hr />}
                        </div>
                    ))}
                </div>
                <div className='sysImg1 col-lg-6 ' >
                    <img className='img-fluid h-100 object-fit-cover' src={productDetails?.image?.url} alt="" />
                </div>
            </section>


            {/* OverView Section2 */}
            <section className='row sysSec2 '>
                <div className='col-lg-8 bgsGray2' ></div>
                <div className='sysImg2 col-lg-6 ' >
                    <img className='img-fluid h-100 object-fit-cover' src={Overview?.image?.url} alt="" />
                </div>
                <div className='col-lg-6 sysText2' >
                    <h5 className='  sysTextTitle  w-100' style={{ fontWeight: '600' }}>{t(`Accomplishments`)}</h5>
                    <h3 className='  sysTextHeader w-100'>{t('Milestones that we proudly.')}</h3>
                    <p className=' sysTextDescription mb-5 w-100'>{Overview?.description ??
                        'In the span of our 25 Years of experience, we have completed 169 projects and have 150+ happy clients over 156700 materials and fabric . The happy faces of our customers inspire us more to do our work dedicatedly and passionately. We work on each and every detail provided by the customers to give them the exact replica of their thoughts.'}
                    </p>

                    <div className='row'>
                        {Overview?.Statistics?.map((single, i) => (
                            <div key={i} className='col-lg-6 d-flex align-items-start mb-5'>
                                <img style={{ width: '79px' }} src={single?.icon?.url} alt="" />
                                <div className='d-flex flex-column px-4'>
                                    <span className='num'>{single?.number}</span>
                                    <span className=' desc w-50 p-0 m-0'> {single?.description}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </section>
    )
}

export default System