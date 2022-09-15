import React from 'react';

//Assets
import pictureBanner from '@assets/Img/solomito.webp';

const Banner = () => {
    return(
        <div className="w-full h-3/4 lg:pt-5" id="home">
            <div className="w-full h-full">
                <div className="w-full h-full flex flex-col absolute py-4 items-center lg:space-y-20 lg:items-start lg:pt-36 lg:justify-start">
                    <div className="hidden h-auto lg:w-3/4 lg:flex pb-6">
                        <p className="text-4xl ml-16 font-bold text-white">Siempre un placer para tu boca...</p>
                    </div> 
                    <button className="w-48 rounded-full text-lg font-semibold p-4 text-primary shadow-sm bg-ebano transition-all duration-500 mt-20 ease-in-out hover:bg-primary hover:text-white dark:bg-gray-800 dark:text-primary dark:hover:bg-primary transform hover:-translate-y-1 hover:scale-110 lg:ml-16">
                        Antojate!
                    </button>
                </div>
                <div 
                    style={{backgroundImage: `url(${pictureBanner})`}} 
                    className="w-full h-96 bg-cover lg:bg-cover lg:bg-center"
                    // w-full h-full lg:h-full lg:bg-sanFranciscoDesktop lg:bg-cover lg:bg-center
                ></div>
            </div>
        </div>
    );
}

export default Banner;