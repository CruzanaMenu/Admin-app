import React from 'react'

const info = () => {
    return(
        <div className="w-full h-auto mb-12 mt-12" id="faqs">
            <div className="w-full h-full px-6 flex-col space-y-4">
                <p className="text-3xl text-primary font-semibold mt-6">Dudas y preguntas</p>
                <div>
                    <p className="text.xl font-semibold text-primary">Reservas</p>
                    <p className="text-md pt-2 dark:text-white">Contamos con estancias de hasta 3 meses, en este caso es requerido un anticipo con un monto del 50% del valor de la renta.</p>
                </div>
                <div>
                    <p className="text.xl font-semibold text-primary">Decoración y eventos especiales.</p>
                    <p className="text-md pt-2 dark:text-white">Contamos con el servicio de decoración para fechas especiales, con reserva mínima de 5 días calendario. Términos y condiciones.</p>
                </div>
                <div>
                    <p className="text.xl font-semibold text-primary">Métodos de pago</p>
                    <p className="text-md pt-2 dark:text-white">Recibimos efectivo, transferencias Nequi y Bancolombia. También aceptamos todos los métodos de pago: VISA, MasterCard, American Express, Paypal y Binance.</p>
                </div>
                <div>
                    <p className="text.xl font-semibold text-primary">Mascotas</p>
                    <p className="text-md pt-2 dark:text-white">Las mascotas tienen espacio exclusivo para ellas, para la espera mientras disfrutas de nuestros platos.</p>
                </div>
                <div>
                    <p className="text.xl font-semibold text-primary">Información de seguridad</p>
                    <p className="text-md pt-2 dark:text-white">Todas nuestras estancias cuentan con su propio seguro contra todo riesgos, y seguros médicos.</p>
                </div>
            </div>
        </div>
    );
}

export default info;