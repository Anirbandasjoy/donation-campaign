import React from 'react'
import { useLocation } from 'react-router-dom'
import { getIds, saveIds } from '../config/localStorage';
import swal from 'sweetalert';

const CategoryDetails = () => {
    const { state } = useLocation();
    const { title, description, id, image, color, category, price } = state || {}
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
            <div className='w-[90%] h-[90%]  mx-auto lg:w-[70%] lg:h-[70%] '>
                <div className='relative z-10'>
                    <img src={image} className='mx-auto w-full' alt={title} />
                    <div className='absolute bottom-0 z-10 py-6 left-0 right-0 bg-black opacity-50'>
                        <button onClick={handelAdded} className={` z-40 ml-8  text-white  py-2 px-4 rounded ]`} style={{ backgroundColor: bgBtn }}>
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