"use client"

import { Rating } from '@material-tailwind/react'
import Image from 'next/image'
import React from 'react'

const CustomerFeedback = () => {
    return (
        <div className='pb-4 border-b border-b-gray-800'>
            <div className="flex items-center gap-2">
                <Image src="/olly.jpg" alt='avatar' width={40} height={40} className='rounded-full flex-shrink-0 w-10 h-10 object-cover' />
                Jenny wilson
            </div>
            <div className='mt-2'>
                <Rating value={4} />
            </div>
            <p className=' text-gray-500 text-sm mt-2'>See below our beautiful Rating example that you can use in your Tailwind CSS and React project. The example also comes in different styles and colors so you can adapt it easily to your needs.</p>
        </div>
    )
}

export default CustomerFeedback