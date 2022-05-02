import React from 'react'
import logo from '../images/logo.png'

const Navbar = () => {
    return (

        <nav className='p-5 bg-white shadow md:flex md:items-center md:justify-between'>
            <div>
                <span className='text-2xl font-[Poppins] cursor-pointer'>
                    <img className='h-10 inline' src={logo} alt="logo" />
                    Rabbit Valley Music Festival
                </span>
            </div>
            <ul className='md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 '>
                <li className='mx-4 my-6 md:my-0'>
                    <a href='#' className='text-xl hover:text-cyan-500  duration-500' >Lineup</a>
                </li>
                <li className='mx-4 my-6 md:my-0'>
                    <a href='#' className='text-xl hover:text-cyan-500 duration-500' >FAQ</a>
                </li>
                <li className='mx-4 my-6 md:my-0'>
                    <a href='#' className='text-xl hover:text-cyan-500 duration-500' >Sponsors</a>
                </li>
                <li className='mx-4 my-6 md:my-0'>
                    <a href='#' className='text-xl hover:text-cyan-500 duration-500' >Contact Us</a>
                </li>
                <button className='bg-cyan-400  border-2 border-black text-black hover:text-white font-[Poppins] duration-500 px-6 py-2 mx-4 hover:bg-indigo-500 rounded-full'>
                    Buy Tickets
                </button>
            </ul>
        </nav>
    )
}

export default Navbar