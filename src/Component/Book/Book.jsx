import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const { image, title, subtitle, price, isbn13 } = book;
    return (
        <Link to={`../book/${isbn13}`} state={book.title}>
            <div className='shadow-md shadow-slate-400 relative transition duration-200 hover:-translate-y-2 rounded-md'>
                <img className='w-full object-fill -z-10 relative' src={image} alt="" />
                <div className='bg-black bg-opacity-75 opacity-0 hover:opacity-100 transition-opacity duration-200 absolute inset-0 text-gray-300 p-5 flex flex-col rounded-md'>
                    <h1 className='text-2xl font-semibold mt-4'>{title}</h1>
                    <br />
                    <h1 className='text-lg font-normal mt-5'>{subtitle.substring(0, 40)}....</h1>
                    <p className='text-xl font-semibold mt-auto text-end'>Price: {price}</p>
                </div>
            </div>
        </Link>
    );
};

export default Book;