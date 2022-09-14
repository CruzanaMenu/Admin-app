import React from 'react'

const footer = () => {
    return(
        <footer className="w-full h-auto bg-backfoot pt-2 space-y-2  dark:bg-gray-700" id="aboutus">
            <div className='flex flex-row justify-center divide-x'>
                <div className='pr-5 border-white'>
                    <p className="text-lag font-bold text-white">Sobre nosotros</p>
                    <p className="text-sma text-gray-400">Cruzana Restaurante - Condominios San Fernando</p>
                    <p className="text-sma text-gray-400">Contactenos:</p>
                    <li className="text-sma text-gray-400">315 6272450</li>
                    <li className="text-sma text-gray-400">310 6930466</li>
                    <p className="text-sma text-gray-400">Ubicados en Anserma, Caldas. Vereda Cauyá.</p>
                </div>
                <div className='pl-5'>
                    <p className='text-lag font-bold text-white'>Encuéntranos</p>
                    <li className='text-gray-400'>Instagram</li>
                </div>
            </div>
            <div className='bg-gray-400 text-xsm text-white dark:bg-white dark:text-gray-900 pl-3'>
                Design and Created by Sergio Alejandro Morales Cuesta - XChecho - Contact: sam94c@gmail.com
            </div>
        </footer>
    );
}

export default footer;