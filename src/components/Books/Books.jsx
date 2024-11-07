import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {

     const [books,setbooks]=useState([]);

     useEffect(()=>{

        fetch('books.json')
        .then(res=>res.json())
        .then(data => setbooks(data))
     },[])
    return (
        <div>
            <h3 className=' text-center items-center text-2xl '> Books : {books.length} </h3>
            <div className='grid grid-cols-3 gap-5'>
            {
                books.map(book => <Book book={book}></Book>)
            }
            </div>
        </div>
    );
};

export default Books;