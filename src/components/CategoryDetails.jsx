import React from 'react'
import { useLocation } from 'react-router-dom'
import { getIds, saveIds } from '../config/localStorage';
import swal from 'sweetalert';

const CategoryDetails = () => {
    const { state } = useLocation();
    const { title, description, id, image, color, price } = state || {}
    const bgBtn = color[2];


    const handelAdded = () => {
        const donationIds = getIds();
        const exsist = donationIds.find((donationId) => donationId === id);
        if (exsist) {
            swal("Opps!", "Alredy Donate", "error");
        } else {
            saveIds(id);
            swal("Good job!", "Added Successfully", "success");
        }
    }


    return (
        <div className='mt-2 mb-5'>
            <div className='w-[90%]  relative mx-auto lg:w-[100%] lg:h-[70%] '>
                <div className='relative'>
                    <div className='relative z-10'>
                        <img src={image} className='mx-auto w-full' alt={title} />
                        <div className='absolute bottom-0 z-10 py-7 sm:py-11 left-0 right-0 bg-black opacity-60'>
                        </div>
                    </div>

                    <button onClick={handelAdded} className={`z-10 sm:ml-8  absolute ml-4 text-white bottom-2  sm:bottom-5 opacity-100 py-2 px-4 rounded`} style={{ backgroundColor: bgBtn }}>
                        Donate ${price}
                    </button>
                </div>
                <h1 className='sm:text-4xl  text-xl mt-5 font-bold'>{title}</h1>
                <p className='mt-5 text-justify text-xs sm:text-xl text-[#0B0B0BB2]'>{description}</p>
            </div>
        </div>
    )
}

export default CategoryDetails