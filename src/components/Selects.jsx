import React from 'react'
import SelectsCard from './SelectsCard'
import hiroshima from '../assets/hiroshima.jpg'
import kyoto from '../assets/kyoto.jpg'
import nara from '../assets/nara.jpg'
import okinawa from '../assets/okinawa.jpg'
import osaka from '../assets/osaka.jpg'
import tokyo from '../assets/tokyo.jpg'

const Selects = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        <SelectsCard bg={hiroshima} text='Hiroshima' alt='Hiroshima' />
        <SelectsCard bg={kyoto} text='Kyoto' alt='Kyoto' />
        <SelectsCard bg={nara} text='Nara' alt='Nara' />
        <SelectsCard bg={okinawa} text='Okinawa' alt='Okinawa' />
        <SelectsCard bg={osaka} text='Osaka' alt='Osaka' />
        <SelectsCard bg={tokyo} text='Tokyo' alt='Tokyo' />
    </div>
  )
}

export default Selects