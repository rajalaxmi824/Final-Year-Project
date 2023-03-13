import React from 'react';
import '../css/Askdoc.css'
import Feed from './Feed';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
const Askdoc = () => {
    return (
        <div className='askdoc'>

        <Navbar />
        <div className='askdoc__content'>
            <Sidebar/>
            <Feed />
        </div>
        
        </div>
    );
};

export default Askdoc;