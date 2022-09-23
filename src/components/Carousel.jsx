import React, { useState } from 'react'
import chef from '../assets/chef.jpg'
import fuji from '../assets/fuji.jpg'
import sakura from '../assets/sakura.jpg'

const Carousel = () => {
    const sliderData = [
        { image: chef, alt: 'chef' },
        { image: fuji, alt: 'Mount Fuji' },
        { image: sakura, alt: 'sakura' },
    ]

    const [ slide, setSlide ] = useState(0)
  
    return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center'>
        { sliderData.map((item, index) => (
            <div className={ index === slide ? 'opacity-100' : 'opacity-0' }>
                { index === slide && (<img className='w-full rounded-md' src={item.image} alt={item.alt} />) }
            </div>
        ))}
    </div>
  )
}

export default Carousel