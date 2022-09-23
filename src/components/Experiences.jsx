import React from 'react'
import forest from '../assets/forest.jpg'
import path from '../assets/path.jpg'
import street from '../assets/street.jpg'
import temple from '../assets/temple.jpg'
import train from '../assets/train.jpg'

const Experiences = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
        <h1>All-Inclusive Adventures</h1>
        <p>Exploring Some of Japan's Hidden Gems</p>
        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
            <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={street} alt="Japanese street at night." />
            <img className='w-full h-full object-cover' src={forest} alt="Bamboo forest in winter." />
            <img className='w-full h-full object-cover' src={path} alt="Fushimi Inari Shrine" />
            <img className='w-full h-full object-cover' src={temple} alt="The Golden Pavilion" />
            <img className='w-full h-full object-cover' src={train} alt="Japanese Train" />
        </div>
    </div>
  )
}

export default Experiences