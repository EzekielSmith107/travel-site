import React, { useState } from 'react'
import chef from '../assets/chef.jpg'
import fuji from '../assets/fuji.jpg'
import sakura from '../assets/sakura.jpg'
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs'

const Carousel = () => {
    const sliderData = [
        { image: chef, alt: 'chef' },
        { image: fuji, alt: 'Mount Fuji' },
        { image: sakura, alt: 'sakura' },
    ]

    const [ slide, setSlide ] = useState(0)
    const length = sliderData.length

    const prevSlide = () => {
        setSlide(slide === 0 ? length - 1 : slide - 1)
    }
    const nextSlide = () => {
        setSlide(slide === length - 1 ? 0 : slide + 1)
    }
  
    return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center'>
        <BsArrowLeftSquareFill onClick={prevSlide} className='absolute top-[50%] text-3xl text-white cursor-pointer left-8' />
        <BsArrowRightSquareFill onClick={nextSlide} className='absolute top-[50%] text-3xl text-white cursor-pointer right-8' />
        { sliderData.map((item, index) => (
            <div className={ index === slide ? 'opacity-100' : 'opacity-0' }>
                { index === slide && (<img className='w-full rounded-md' src={item.image} alt={item.alt} />) }
            </div>
        ))}
    </div>
  )
}

export default Carousel