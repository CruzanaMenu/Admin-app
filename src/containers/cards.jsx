import React from 'react';

// //Components
// import singleCard from '@components/singleCards.jsx';

//Assets
import carneend from '@assets/Img/carnefuego.webp';
import solomito from '@assets/Img/solomito.webp';
import alitasteri from '@assets/Img/polloalhorno.webp';
import churrasco from '@assets/Img/carneasada.webp';
import salmon from '@assets/Img/salmon.webp';
import pechuga from '@assets/Img/pechuga.webp';
import puntadeanca from '@assets/Img/puntadeanca.webp';
import costillasbbq from '@assets/Img/costillasbbq.webp';
import trucha from '@assets/Img/trucha.jpg';
import paella from '@assets/Img/paella.jpg';
import hamburguesa from '@assets/Img/hamburguesa.webp';
import agridulce from '@assets/Img/agridulce.webp';


const cards = () => {
    return (

        <div className="w-full h-auto" id="popular">
            <p className="text-3xl font-semibold text-primary pl-6 pt-6">Los más populares</p>

            <div className="w-auto h-72 items-center mt-6 p-6 overflow-x-auto overscroll-x-contain flex space-x-6 scrollbar-hide overflow-y-hidden">
                
                <div className="Card">
                    <div className="Card--cover" style={{backgroundImage: `url(${carneend})`}} ></div>
                        <div className="Card--info">
                            <p className="Card--info__title">Carne endiablada</p>
                            <p className="Card--info__subtitle">Paisajes increaibles</p>
                    </div>
                </div>

                <div className="Card">
                    <div className="Card--cover" style={{backgroundImage: `url(${solomito})`}}></div>
                        <div className="Card--info">
                            <p className="Card--info__title">Solomito</p>
                            <p className="Card--info__subtitle">La gran manzana</p>
                    </div>
                </div>
                <div className="Card">
                    <div className="Card--cover" style={{backgroundImage: `url(${salmon})`}}></div>
                        <div className="Card--info">
                            <p className="Card--info__title">Salmon asado</p>
                            <p className="Card--info__subtitle">Una pausa del mundo</p>
                    </div>
                </div>
                <div className="Card">
                    <div className="Card--cover" style={{backgroundImage: `url(${churrasco})`}}></div>
                        <div className="Card--info">
                            <p className="Card--info__title">Churrasco Argentino</p>
                            <p className="Card--info__subtitle">El gran puerto del este </p>
                    </div>
                </div>
                <div className="Card">
                    <div className="Card--cover"style={{backgroundImage: `url(${pechuga})`}}></div>
                        <div className="Card--info">
                            <p className="Card--info__title">Pechuga asada</p>
                            <p className="Card--info__subtitle">Sin perder la dieta</p>
                    </div>
                </div>
                <div className="Card">
                    <div className="Card--cover" style={{backgroundImage: `url(${puntadeanca})`}}></div>
                        <div className="Card--info">
                            <p className="Card--info__title">Punta de anca</p>
                            <p className="Card--info__subtitle">En salsa de mora</p>
                    </div>
                </div>
                <div className="Card">
                    <div className="Card--cover" style={{backgroundImage: `url(${costillasbbq})`}}></div>
                        <div className="Card--info">
                            <p className="Card--info__title">Costilla Bbq</p>
                            <p className="Card--info__subtitle">Jugosas y únicas</p>
                    </div>
                </div>
                <div className="Card">
                    <div className="Card--cover" style={{backgroundImage: `url(${alitasteri})`}}></div>
                        <div className="Card--info">
                            <p className="Card--info__title">Alitas Teriyaki</p>
                            <p className="Card--info__subtitle">Hollywood y sus estrellas</p>
                    </div>
                </div>
                <div className="Card">
                    <div className="Card--cover" style={{backgroundImage: `url(${trucha})`}}></div>
                        <div className="Card--info">
                            <p className="Card--info__title">Trucha asada</p>
                            <p className="Card--info__subtitle">Al ajillo</p>
                    </div>
                </div>
                <div className="Card">
                    <div className="Card--cover" style={{backgroundImage: `url(${paella})`}}></div>
                        <div className="Card--info">
                            <p className="Card--info__title">Paella española</p>
                            <p className="Card--info__subtitle">Con todo el sabor meditarráneo</p>
                    </div>
                </div>
                <div className="Card">
                    <div className="Card--cover bg-cover bg-center" style={{backgroundImage: `url(${hamburguesa})`}}></div>
                        <div className="Card--info">
                            <p className="Card--info__title">Hamburguesa sencilla</p>
                            <p className="Card--info__subtitle">Con el secreto de la casa</p>
                    </div>
                </div>
                <div className="Card">
                    <div className="Card--cover bg-cover bg-center" style={{backgroundImage: `url(${agridulce})`}}></div>
                        <div className="Card--info">
                            <p className="Card--info__title">Cerdo agridulce</p>
                            <p className="Card--info__subtitle">Con verduras salteadas</p>
                    </div>
                </div>
                <div className="Card">
                    <div className="Card--cover " style={{backgroundImage: `url(${hamburguesa})`}}></div>
                        <div className="Card--info">
                            <p className="Card--info__title">Lomo de cerdo</p>
                            <p className="Card--info__subtitle">A la plancha</p>
                        </div>
                    </div>
                </div>
        </div>
        // <div>
        //     <singleCard />
        // </div>
    );
}

export default cards;