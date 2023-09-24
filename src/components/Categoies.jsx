import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Categories = () => {
    const { data } = useLoaderData();
    return (
        <div className='grid grid-cols-1 my-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10'>
            {data?.map((category) => {
                const backgroundColor = category.color[0];
                const CategoryBackgroundColor = category.color[1];
                const textColor = category.color[2];
                return (
                    <Link key={category.id} to={`/category/${category.id}`} state={category}>
                        <div className="card card-compact" style={{ backgroundColor: backgroundColor }}>
                            <figure><img className='w-full ' src={category.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <span className=" badge  p-3 rounded-md" style={{ backgroundColor: CategoryBackgroundColor, color: textColor }}>{category.category}</span>
                                <h2 className="text-xl font-semibold" style={{ color: textColor }}>{category.title}</h2>
                            </div>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}

export default Categories;
