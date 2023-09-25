import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { getIds } from '../../config/localStorage';

const Statistics = () => {
    const [donationData, setDonationData] = useState([]);
    const donation = useLoaderData();

    useEffect(() => {
        const donationId = getIds();
        const donations = donation.data.filter((donation) => donationId.includes(donation.id));
        setDonationData(donations);
        console.log(donationData)
    }, []);

    const donetedData = donation.data.length - donationData.length;

    const data = [
        { name: 'Group A', value: donetedData },
        { name: 'Group B', value: donationData.length },
    ];

    const COLORS = ['#FF444A', '#00C49F'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent,
        index,
    }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > cx ? 'start' : 'end'}
                dominantBaseline="central"
            >
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <div className='mb-5'>
            <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={150}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            <div className='flex flex-col md:flex-row justify-center items-center gap-5 my-auto'>

                <div className='flex justify-center items-center gap-3'>
                    <div className='text-[1rem]'>
                        <h1>Your Donation</h1>
                    </div>

                    <div className='w-[6rem] mt-1 h-[.6rem] bg-[#00C49F]'></div>
                </div>

                <div className='flex justify-center items-center gap-3'>
                    <div className='text-[1rem]'>
                        <h1>Total Donation</h1>
                    </div>

                    <div className='w-[6rem] mt-1 h-[.6rem] bg-[#FF444A]'></div>
                </div>

            </div>

        </div>
    );
};

export default Statistics;
