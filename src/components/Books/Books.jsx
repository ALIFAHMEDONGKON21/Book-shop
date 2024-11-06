import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';

const Books = () => {

     const [books,setbooks]=useState([]);

     useEffect(()=>{

        fetch('books.json')
        .then(res=>res.json())
        .then(data => setbooks(data))
     },[])
    return (
        <div>
            <h3>{books.length}</h3>
            
        </div>
    );
};

export default Books;