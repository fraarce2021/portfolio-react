import React from 'react';
import {Link} from 'react-router-dom';

function Hero() {
    return (
        <div className="container-hero">
            <div className="title-hero">
            <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-black mb-14">
                FRANCISCO ARCE CHAVARRÍA
            </h1>
            </div>
            <div className='py-6 px-10 bg-red-900 rounded-full text-3xl hover:bg-red-700 transition duration-300 ease-in-out flex items-center animate-bounce text-white button-hero'>
            See PDF
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            </div>
        </div>
    )
}

export default Hero
