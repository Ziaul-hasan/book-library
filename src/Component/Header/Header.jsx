import React, { useState } from 'react';
import { BoltIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='flex justify-between items-center px-4 md:px-10 bg-slate-200 shadow-md shadow-slate-400'>
            <Link to="/">
                <div className='inline-flex items-center space-x-3 py-4 bg-slate-200 z-10 relative'>
                    <BoltIcon className="h-6 w-6 text-blue-500" />
                    <h2 className='text-xl md:text-3xl font-bold text-gray-800'>IdeaSpring</h2>
                </div>
            </Link>
            <div>
                <div onClick={() => setOpen(!open)}>
                    {
                        (open === true ? <XMarkIcon className="h-6 w-6 text-blue-500 md:hidden"></XMarkIcon> : <Bars3BottomRightIcon className="h-6 w-6 text-blue-500 md:hidden"></Bars3BottomRightIcon>)
                    }
                </div>
                <ul className={`md:inline-flex absolute md:static duration-300 ${open ? 'top-16 left-0 right-0 ps-10' : '-top-36 left-0 right-0 ps-10'} md:space-x-8 py-4 bg-slate-200 text-gray-800 text-xl`}>
                    <li className='hover:text-blue-500'><NavLink title='/home' className={({ isActive, isPending }) => isActive ? 'text-blue-500' : ''} to="/">Home</NavLink></li>
                    <li className='hover:text-blue-500'><NavLink title='/books' className={({ isActive, isPending }) => isActive ? 'text-blue-500' : ''} to="/books">Books</NavLink></li>
                    <li className='hover:text-blue-500'><NavLink title='/about' className={({ isActive, isPending }) => isActive ? 'text-blue-500' : ''} to="/about">About</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;