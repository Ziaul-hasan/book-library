import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const BookDetails = () => {
    const book = useLoaderData()
    const [fold, setFold] = useState(true);
    const { image, authors, title, language, price, pages, publisher, subtitle, desc } = book
    return (
        <div className='md:flex justify-between items-center w-3/4 mx-auto md:p-10 md:shadow-md md:my-10 rounded-md shadow-slate-400'>
            <div className='md:w-2/5'>
                <img className='w-full' src={image} alt="" />
            </div>
            <div className='md:w-3/5'>
                <h1 className='text-2xl md:text-4xl font-semibold mt-4'>{title}</h1>
                <h1 className='text-lg font-medium mt-4'>Authors: {authors}</h1>
                <h1 className='text-base font-normal'><span className='text-lg font-medium'>Publisher:</span> {publisher}</h1>
                <h1 className='text-lg font-normal'><span className='text-lg font-medium'>Pages:</span> {pages}</h1>
                <h1 className='text-lg font-semibold mt-2'>Language: {language}</h1>
                <h1 className='text-lg font-medium mt-5'>{subtitle}</h1>
                {
                    fold ?
                        <>
                            <h1 className='text-lg font-normal mt-5'>{desc.substring(0, 150)}.... <span className='text-blue-500 cursor-pointer' onClick={() => setFold(!fold)}>Read more</span></h1>
                        </>
                        :
                        <>
                            <h1 className='text-lg font-normal mt-5'>{desc} <span className='text-blue-500 cursor-pointer' onClick={() => setFold(!fold)}>Read less</span></h1>
                        </>
                }

                <p className='text-xl font-semibold mt-4'>Price: {price}</p>
                <button className='mt-5 md:me-3 bg-blue-500 text-white hover:bg-green-500 text-xl font-semibold px-8 py-2 rounded-md'>Buy Now</button>
                <Link to="/books">
                    <button className='mt-5 md:ms-3 bg-green-500 text-white hover:bg-blue-500 text-xl font-semibold px-8 py-2 rounded-md'>View Books</button>
                </Link>
            </div>
        </div>
    );
};

export default BookDetails;