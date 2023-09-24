import React from 'react'
import banner from "../assets/Clothing.png"

const Hero = () => {
    return (
        <div>
            <div className="hero min-h-[60vh]" style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero-overlay bg-opacity-80 bg-white"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-xl">
                        <h1 className="mb-5 text-3xl text-gray-800 font-bold">I Grow By Helping People In Need</h1>
                        <div className='flex items-center justify-center'>
                            <input type="text" placeholder="Search here" className="py-3 outline-none px-3 text-black w-full rounded-none max-w-xs rounded-l-md" />
                            <button className='btn rounded-none py-2 hover:bg-[#FF444A] capitalize text-white bg-[#FF444A] rounded-r-md'>Search</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero