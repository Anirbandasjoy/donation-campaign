import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { getIds } from '../../config/localStorage';
import DataNotFound from '../../components/DataNotFound';

const Donation = () => {
    const [donationData, setDonationData] = useState([]);
    const [dataLength, setDataLength] = useState(4);
    const { data } = useLoaderData();

    useEffect(() => {
        const donationId = getIds();
        const donations = data.filter((donation) => donationId.includes(donation.id));
        setDonationData(donations);
    }, []);

    return (
        <div className=''>
            {
                donationData.length <= 0 ? <div ><DataNotFound /></div> : <div className='grid mb-10 text-center items-center md:text-start mt-5 grid-cols-1 lg:grid-cols-2 gap-4 md:gap-7 mx-auto'>
                    {donationData.slice(0, dataLength)?.map((donation) => {
                        const CategoryBackgroundColor = donation.color[1];
                        const backgroundColor = donation.color[0];
                        const textColor = donation.color[2];
                        return (
                            <div key={donation.id} className='rounded-md' style={{ backgroundColor: backgroundColor }}>
                                <div className='flex gap-4  flex-col md:flex-row  items-center md:items-start  p-5 md:p-0'>
                                    <img className='w-64 my-auto h-[31vh] ' src={donation.image} alt={donation.title} />
                                    <div className='my-3'>
                                        <h3 className="badge  rounded-md" style={{ backgroundColor: CategoryBackgroundColor, color: textColor }}>{donation.category}</h3>
                                        <h1 className='text-sm md:text-xl lg:2xl font-semibold mt-2 '>{donation.title}</h1>


                                        <p className='text-sm md:text-xl lg:2xl font-semibold mt-1 ' style={{ color: textColor }}>${donation.price}</p>
                                        <Link

                                            className='btn mt-4 capitalize text-white'
                                            style={{ backgroundColor: textColor }}
                                        >
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            }
            <div className={`text-center mt-8 ${donationData.length <= dataLength ? 'hidden' : 'block'}`}>
                <button onClick={() => setDataLength(donationData.length)} className='btn bg-[#009444] text-white hover:bg-[#009444]'>See ALL</button>
            </div>
        </div>
    );
}

export default Donation;
