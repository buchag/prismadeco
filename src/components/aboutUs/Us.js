

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faHandHoldingHeart, faTruck } from '@fortawesome/free-solid-svg-icons';


const Us = () => {
    return (
        
            <section className='mt-20 mb-16 h-[350px] relative md:h-[398px] overflow-hidden flex flex-col  bg-cover  bg-center bg-fixed' style={{ backgroundImage: "url('/maiar-shalaby-iXcSt4HEqQ4-unsplash-scaled.jpg')" }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className='relative z-10'>
                    <h2 className='text-center text-4xl pt-10 mt-10 pb-5 text-gray-100'>Nuestro diferencial</h2>
                    <p className='text-sm md:text-base text-center pt-5 md:pt-10 text-gray-100'>En Prismadeco nos diferenciamos por la <b>calidad de los productos y los tiempos de entrega</b>, cumpliendo los plazos establecidos<br></br> <b>contando con excelente personal en logística.</b></p>
                    <div className=' flex justify-center mt-9 '>
                        <FontAwesomeIcon icon={faClock} className='mx-4 text-2xl w-6 h-6 text-white' />
                        <FontAwesomeIcon icon={faTruck} className='mx-4 text-2xl w-6 h-6 text-white' />
                        <FontAwesomeIcon icon={faHandHoldingHeart} className='mx-4 text-2xl w-6 h-6 text-white' />
                    </div>
                </div>

            </section>

    )
}

export default Us