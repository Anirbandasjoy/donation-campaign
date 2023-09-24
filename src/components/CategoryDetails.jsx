import React from 'react'
import { useLocation } from 'react-router-dom'

const CategoryDetails = () => {
    const { state } = useLocation();
    const { title, description, id, image, color, category, price } = state || {}
    const bgBtn = color[2];
    return (
        <div className='mt-2 mb-5'>
            <div className='w-[50%] h-[50%] mx-auto '>
                <div className='relative z-10'>
                    <img src={image} className='mx-auto w-full' alt={title} />
                    <div className='absolute bottom-0 py-6 left-0 right-0 bg-black opacity-50'>
                        <button className={` ml-8  text-white  py-2 px-4 rounded ]`} style={{ backgroundColor: bgBtn }}>
                            Donate ${price}
                        </button>
                    </div>
                </div>
                <h1 className='text-3xl mt-5 font-bold'>{title}</h1>
                <p className='mt-5 text-[#0B0B0BB2]'>{description}</p>
            </div>
        </div>
    )
}

export default CategoryDetails