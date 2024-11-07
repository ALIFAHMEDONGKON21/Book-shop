import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredReadList } from '../../adtod';
import { addtowishlist } from '../../adtoM';

const Bookdetails = () => {

    const { bookId}=useParams();
    const id=parseInt(bookId)
    const data =useLoaderData();
  
    const book=data.find(book =>book.bookId ===id)
    console.log(book)

      
    const {bookName,image,review,totalPages,publisher,rating,yearOfPublishing,author}=book

    const handleread=(id)=>{
        addToStoredReadList(id)
    }


    const handlewish=(id)=>
    {
        addtowishlist(id);
    }
    return (
        <div>
            <h3>{bookId}</h3>
            <div className='flex flex-row  py-5 gap-5'>
                <div className='bg-gray-200' >
                    <img className='p-20 rounded-lg'   src={image} alt="" />
                </div>
                <div className='w-1/2'>
                    <h2 className=' text-2xl  font-bold py-2  '>{bookName}</h2>
                    <p className='text-gray-200'>{author}</p>
                    
                    <p className='text-gray-700 mb-20'>{review}</p>

                    <p className='text-black text-2xl'>totalPages : {totalPages}</p>

                    <p className='text-black text-2xl'>publisher :{publisher}</p>
                    <p className='txet-black text-2xl'>yearOfPublishing: {yearOfPublishing}</p>

                    <p className=' text-black text-2xl'>rating: {rating}</p>


                   <div className=' flex gap-10 py-10'>
                   <button onClick={()=>handleread(bookId)} className="btn btn-sm">Read</button>
                   <button onClick={()=>handlewish(bookId)} className="btn btn-sm bg-blue-400">Wishlist</button>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Bookdetails;