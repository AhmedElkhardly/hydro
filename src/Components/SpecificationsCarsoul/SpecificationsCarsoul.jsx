import React from 'react'
import './SpecificationsCarsoul.css'
import { Carousel } from 'react-responsive-carousel';
// import image from '../../assets/images/Footer 1.png'
// import image2 from '../../assets/images/car/1.png'

function SpecificationsCarsoul({ images }) {
    return (
        <Carousel showArrows={false}  >
            {images?.map((image, i) => (
                <div key={i}>
                    <img alt='productImage' src={image?.url ??'./empty.png'} />
                </div>
            ))}
        </Carousel>
    )
}

export default SpecificationsCarsoul