import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({book}) => {
    const {image ,bookName,author,tags,bookId,publisher}=book

    
    return (
       <Link to={`/books/${bookId}`}>
        <div className="card bg-base-100 w-84 shadow-xl ">
        <figure className=' bg-gray-200 p-6'>
          <img 
            src={image}
             className='h-[166px] rounded-lg'
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className=' flex flex-row justify-between '>
          {
             tags.map(tag =><button className="btn btn-xs text-green-400 bg-green-100">{tag}</button>) 
          }
          </div>
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p> author: {author}</p>
          <div className=' border-t-2 border-dashed'>
      
          </div>
          <div className="card-actions  justify-between">
            <div className="badge badge-outline">{publisher}</div>
            <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-orange-400"
    defaultChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
 
</div>
          </div>
        </div>
      </div>
       </Link>
    );
};

export default Book;