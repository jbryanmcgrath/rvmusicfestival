import React, { useState } from 'react'
import logo from '../images/logo.png'


const Navbar = () => {
    let Links = [
        { name: "Lineup", link: '/' },
        { name: "FAQ", link: '/' },
        { name: "Sponsors", link: '/' },
        { name: "Contact Us", link: '/' }
    ]

    let [open, setOpen] = useState(false);


    return (

        <nav className='p-5 bg-white shadow md:flex md:items-center md:justify-between'>
            <div className='flex justify-between items-center'>
                <span className='text-2xl font-[Poppins] cursor-pointer'>
                    <img className='h-10 inline' src={logo} alt="logo" />
                    Rabbit Valley Music Festival
                </span>
                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>
            </div>
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
                {
                    Links.map((link) => (
                        <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                            <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
                        </li>
                    ))
                }
                <button className='bg-cyan-400  border-2 border-black text-black hover:text-white font-[Poppins] duration-500 px-6 py-2 mx-4 hover:bg-indigo-500 rounded-full'>
                    Buy Tickets
                </button>
            </ul>
        </nav>
    )
}

export default Navbar