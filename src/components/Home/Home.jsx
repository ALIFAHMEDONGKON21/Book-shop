import React from 'react';
import Banner from '../Banner/Banner';
import Books from '../Books/Books';

const Home = () => {
    return (
        <div className='py-10 rounded-lg'>
            <h2 className=' text-4xl '>Home page here</h2>
            <Banner></Banner>
            <Books></Books>
        </div>
    );
};

export default Home;