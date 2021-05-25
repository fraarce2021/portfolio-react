import React from 'react';
import ImageOne from '../images/1.png';
import ImageTwo from '../images/2.jpg'

function Content() {
    return (
        <>
        
        <div className='menu-card'>
            <img src={ImageOne} alt="coding" className="h-full rounded mb-20 shadow" />
            <div className='center-content'>
                <h2 className='text-2xl mb-2'>Coding</h2>
                <p className='mb-2'>In my life, forever!</p>
            </div>
        </div>
        <div className='menu-card'>
            <img src={ImageTwo} alt="coding" className="h-full rounded mb-20 shadow" />
            <div className='center-content'>
                <h2 className='text-2xl mb-2'>Coding</h2>
                <p className='mb-2'>In my life, forever!</p>
            </div>
        </div>
        </>
    )
}

export default Content
