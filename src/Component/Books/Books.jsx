import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Book from '../Book/Book';

const Books = () => {
    const allBooks = useLoaderData();
    const books = allBooks.books;
    // console.log(allBooks.books)
    return (
        <div className='px-6 py-8 md:px-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {
                books.map(book => <Book key={book.isbn13} book={book}></Book>)
            }
        </div>
    );
};

export default Books;