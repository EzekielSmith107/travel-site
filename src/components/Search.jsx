import React from 'react'
import { RiCustomerService2Fill } from 'react-icons/ri'
import { MdOutlineTravelExplore } from 'react-icons/md'

const Search = () => {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
        <div className='lg:col-span-2 flex flex-col justify-evenly'>
            <div>
                <h2>LUXURY CURATED EXPERIENCES FOR TWO PEOPLE</h2>
                <p className='py-4'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur atque facilis, inventore voluptate, iste consequuntur omnis a exercitationem in enim rem nostrum illo mollitia hic excepturi nisi quis ab quam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga harum repellat facilis iste numquam voluptates natus libero hic, voluptate suscipit nam consequatur repudiandae quae incidunt pariatur autem! Et, praesentium magnam.
                </p>
            </div>
            <div className='grid sm:grid-cols-2 gap-8 py-4'>
                <div className='flex flex-col lg:flex-row items-center text-center'>
                    <button><RiCustomerService2Fill size={50} /></button>
                    <div>
                        <h3 className='py-2'>LEADING SERVICE</h3>
                        <p className='py-1'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN A ROW</p>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col lg:flex-row items-center text-center'>
                        <button><MdOutlineTravelExplore size={50} /></button>
                        <div>
                            <h3 className='py-2'>HIGHEST REVIEWS</h3>
                            <p className='py-1'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN A ROW</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <div className='border text-center'>
                <p className='pt-2'>GET AN ADDITIONAL 10% OFF</p>
                <p className='py-4'>12 HOURS LEFT</p>
                <p className='bg-gray-800 text-gray-200 py-2'>BOOK NOW AND SAVE</p>
            </div>
            <form>
                <div>
                    <label>Destination</label>
                    <select>
                        <option>Hiroshima</option>
                        <option>Kyoto</option>
                        <option>Nara</option>
                        <option>Okinawa</option>
                        <option>Osaka</option>
                        <option>Tokyo</option>
                    </select>
                </div>
                <div>
                    
                </div>
                <div></div>
            </form>
        </div>
    </div>
  )
}

export default Search