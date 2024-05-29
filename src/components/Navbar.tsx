import React from 'react'
import { FaSun, FaSearchLocation } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import Search from './Search';


type Props = {}

export default function Navbar({}: Props) {
  return (
    <nav className='shadow-sm sticky top-0 left-0 z-50 bg-white'>
        <div className='h-[80px] w-full flex justify-between items-center max-w-7x1 px-3 mx-auto'>
            <p className='flex items-center justify-center gap-2'>
                <h2 className='text-gray-500 text-3x1'>
                    Spencers Weather App
                </h2>
                <FaSun className='text-3xl mt-1 text-yellow-300' />
            </p>
            {/*  */}
            <section className='flex gap-2 items-center'>
            <FaSearchLocation className='text-2xl text-gray-400 hover:opacity-80 cursor-pointer' />
            <MdOutlineLocationOn className='text-3xl ' />
            <p className='text-slate-900/80 text-sm'> Florida </p>
            <div>
                <Search />
            </div>
            </section>
        </div>
    </nav>
  )
}