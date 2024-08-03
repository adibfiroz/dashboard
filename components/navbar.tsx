"use client"

import { Bell, Mail, Menu, Search, Settings } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import Sidebar from './sidebar'
import { cn } from '@/lib/utils'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <header className='bg-[#202028] p-5 flex justify-between items-center sticky top-0 z-20'>
            <div className='bg-[#2a2b30] rounded-md px-3 py-2 hidden md:flex'>
                <Search />
                <input type="text" className=' bg-transparent pl-2 outline-none' placeholder='search' />
            </div>

            <div onClick={() => setOpen(!open)} className='md:hidden'>
                <Menu />
            </div>

            <div className={cn('flex w-20 flex-col fixed inset-y-0 z-50 -left-52 transition-all duration-300', open && "left-0")}>
                <Sidebar />
            </div>
            {open && <div onClick={() => setOpen(!open)} className=' fixed bg-black opacity-50 top-0 left-0 bottom-0 right-0 z-40'></div>}


            <div className=' flex items-center flex-shrink-0'>
                <div className='flex gap-x-4 mr-6'>
                    <div className='bg-[#44454a] rounded-full p-2 text-gray-400'><Mail /></div>
                    <div className='bg-[#44454a] rounded-full p-2 text-gray-400'><Settings /></div>
                    <div className='bg-[#44454a] rounded-full p-2 text-gray-400 relative'>
                        <Bell />
                        <span className=' absolute w-2.5 h-2.5 bg-[#7294ff] rounded-full top-2 right-2'></span>
                    </div>
                </div>
                <Image src="/olly.jpg" alt='avatar' width={40} height={40} className='rounded-full w-10 h-10 object-cover' />
            </div>
        </header>
    )
}

export default Navbar