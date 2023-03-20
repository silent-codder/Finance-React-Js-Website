import React from 'react'
import laptop from '../assets/laptop.jpg'

export const Analytic = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[500px] mx-auto my-4' src={laptop} />
                <div className='flex flex-col justify-center'>
                    <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                    <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur animi velit explicabo, dolor mollitia accusantium? Quidem, ipsa, earum velit molestias, omnis nobis eligendi officia tenetur totam sed nemo qui inventore.</p>
                    <button className='bg-[#000300] w-[200px] font-medium rounded-md my-6 mx-auto md:mx-0 py-3 text-white'>Get Started</button>
                </div>
            </div>
        </div>
    )
}
