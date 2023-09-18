import React from 'react'
import './ProductOverview.css'
import { t } from 'i18next'
function ProductOverview({ overview }) {
  console?.log(overview)
  return (
    <section className='PageWrapper '>
      <h4 className='mb-3 fw-bold'>{t('Product overview')}</h4>
      <div className='bg-light row rounded'>
        {overview?.map((single, i) => (
          <div key={i} className='col-6 p-3 d-flex align-items-center'>
            <img className='pe-1' src={single?.icon?.url} alt="" />
            <span className='overviewname'>{single?.name}</span>
          </div>
        ))}

      </div>
    </section>
  )
}

export default ProductOverview