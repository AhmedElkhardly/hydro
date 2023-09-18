import React, { useState } from 'react'
import './projectheader.css'
import { Rating } from '@mui/material'

function ProjectHeader({ title, description, review, isRated }) {
    const [rating, setRating] = useState()
    const handleRating = (rate) => {
        setRating(rate)

    }
    return (
        <div className='SpecTextContianer'>
            <h2 className='containerWrapper pe-lg-2 me-lg-5'>{title}</h2>
            <p className='containerWrapper description pe-lg-2 me-lg-5'>{description}</p>
            <div className='d-flex containerWrapper align-items-start'>
                <Rating name={`simple-controlled`} readOnly={isRated} value={rating} size='large' onChange={(event, newValue) => { handleRating(newValue); }} />
                <p className='riviewcount'> ( {review} review ) </p>
            </div>

        </div>
    )
}

export default ProjectHeader