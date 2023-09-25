import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
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
                donationData.length <= 0 ? <div ><DataNotFound /></div> : <div className='grid mb-10 mt-5 grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-7 mx-auto'>
                    {donationData.slice(0, dataLength)?.map((donation) => {
                        const CategoryBackgroundColor = donation.color[1];
                        const backgroundColor = donation.color[0];
                        const textColor = donation.color[2];
                        return (
                            <div key={donation.id} className='rounded-md' style={{ backgroundColor: backgroundColor }}>
                                <div className='flex gap-4 flex-col md:flex-row  items-center md:items-start p-5 md:p-0'>
                                    <img className='w-60 h-40' src={donation.image} alt={donation.title} />
                                    <div className='mt-4'>
                                        <h3 className="badge p-3 rounded-md" style={{ backgroundColor: CategoryBackgroundColor, color: textColor }}>{donation.category}</h3>
                                        <h1 className='text-2xl font-semibold mt-2'>{donation.title}</h1>
                                        <button className='btn mt-4 capitalize text-white' style={{ backgroundColor: textColor }}>View Details</button>
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
