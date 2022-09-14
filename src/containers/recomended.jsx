import React from 'react'

//Assets
import polloHorno from '@assets/Img/polloalhorno.webp';
import churrasco from '@assets/Img/carneasada.webp';
import salmon from '@assets/Img/salmon.webp';
import carneendi from '@assets/Img/carnefuego.webp';

const Recomended = () => {
    return (
        <div className="px-2 h-auto w-full" id="recomended">
            <p className="text-3xl text-primary font-semibold pb-6 mt-6 mx-2">La selección del chef</p>
            {/* Se organizar las selecciones, se debe organizar por mes, dejar dinámico */}

            <div className="w-full h-full flex-col space-y-6 items-center justify-center lg:grid lg:grid-cols-2 lg:grid-rows-3 lg:gap-3">

                <div style={{backgroundImage: `url(${polloHorno})`}} className="w-full h-96 bg-cover rounded-xl bg-center lg:bg-center lg:col-span-2 lg:row-span-1">
                    <p className="CardTitle lg:text-white drop-shadow-lg shadow-black">Alitas teriyaki de Vietnam</p>
                    <p className=" text-sm pl-8 text-white lg:text-white lg:text-lg lg:font-semibold mr-24 drop-shadow-2xl shadow-black">Mezcla de especias surasiáticas, cubiertas con salsa teriyaki reposada durante 2 días.</p>
                </div>
                
                <div style={{backgroundImage: `url(${churrasco})`}} className="w-full h-96 rounded-xl bg-cover bg-center lg:col-span-1 lg:row-span-2 lg:h-full">
                    <p className="CardTitle">Churrasco argentino</p>
                    <p className=" text-sm pl-8 text-white lg:text-lg lg:font-semibold mr-24">Lomo cuadrado de res de 320 gramos, madurado durante 2 semanas, preparado y servido a la planda, ideal en un termino 3/4.</p>
                </div>
                <div style={{backgroundImage: `url(${salmon})`}} className="w-full h-96 rounded-xl bg-cover bg-center lg:col-span-1 lg:row-span-1 lg:h-full">
                    <p className="CardTitle">Salmón asado con portobellos</p>
                    <p className=" text-sm pl-8 text-white lg:text-white lg:text-lg lg:font-semibold mr-24">Salmón cocinado en jugo de limón, junto a tomate asado y portobellos cortados en rebanadas</p>
                </div>
                <div style={{backgroundImage: `url(${carneendi})`}} className="w-full h-96 rounded-xl bg-cover bg-center lg:col-span-1 lg:row-span-1 lg:h-full">
                    <p className="CardTitle">Carne endiablada</p>
                    <p className=" text-sm pl-8 text-white lg:text-white lg:text-lg lg:font-semibold mr-24">Solomito de res, cocinada a más de 300°C, sellando su sabor exquisito en vino, servida en flamas</p>
                </div>
            </div>
        </div>
    );
}

export default Recomended;