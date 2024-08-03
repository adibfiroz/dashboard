"use client"

import { cn } from '@/lib/utils';
import { CalendarCheck, ChartColumnBig, ClipboardCheck, ClipboardPlus, CreditCard, House } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

const Sidebar = () => {
    const pathname = usePathname();
    const routes = [
        {
            label: 'Dashboard',
            icon: House,
            href: '/',
            color: "text-gray-500"
        },
        {
            label: 'Image Generation',
            icon: ChartColumnBig,
            color: "text-gray-400",
            href: '/image-generation',
        },
        {
            label: 'Conversation',
            icon: ClipboardCheck,
            href: '/conversation',
            color: "text-gray-400",
        },
        {
            label: 'Settings',
            icon: CreditCard,
            href: '/settings',
            color: 'text-gray-400'
        },
        {
            label: 'Settings',
            icon: CalendarCheck,
            href: '/card',
            color: 'text-gray-400'
        },
    ];

    return (
        <div className='bg-[#202028] flex flex-col h-full text-white'>
            <div className='text-center mt-3 mb-7'>
                <Link href="/" >
                    <img src="/menu.png" width={25} height={25} className=' mx-auto' alt="logo" />
                </Link>
            </div>

            <div className='space-y-6'>
                {routes.map((route) => (
                    <Link
                        key={route.href}
                        href={route.href}
                        className={cn('px-5 py-1 flex justify-center',
                            pathname === route.href ? " border-l-2 border-l-[#7294ff]" : "",
                        )}>
                        <route.icon className={cn(pathname === route.href ? "fill-[#7294ff] text-[#7294ff]" : route.color)} />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Sidebar