import React from 'react';
import Lottie from "lottie-react";
import reading from "../../assets/54639-boy-studying-science.json"
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='px-2 md:px-20 py-10 mt-5 flex flex-col-reverse md:flex-row justify-between items-center'>
            <div className='md:w-1/2'>
                <h1 className='text-xl md:text-5xl font-bold'>A reader lives a thousand lives before he dies </h1>
                <br />
                <p className='text-lg font-normal'>The Power of Reading helps to develop inference and deduction and comprehension skills. It also involves children regularly writing in different genres and creates a more cohesive learning experience. Literacy is at the heart of the curriculum and the texts facilitate a range of exciting cross curricular work.</p>
                <Link to="/books">
                    <button className='mt-5 me-3 bg-blue-500 text-white hover:bg-green-500 text-xl font-semibold px-8 py-2 rounded-md'>View Books</button>
                </Link>
                <Link to="/about">
                    <button className='mt-5 ms-3 bg-green-500 text-white hover:bg-blue-500 text-xl font-semibold px-8 py-2 rounded-md'>About us</button>
                </Link>
            </div>
            <div className='w-full md:w-2/5 -z-10'>
                <Lottie animationData={reading} loop={true} />
            </div>
        </div>
    );
};

export default Home;