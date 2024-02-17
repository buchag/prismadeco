import React from 'react'
import Image from 'next/image'


const About = () => {
  return (
    <>
      <div className='margin'>
        <section className='mt-10 h-1/6 md:h-1/4  w-full grid grid-cols-1 md:grid-cols-2 pt-24'>
          <div className='bg-custom-gray p-6 '>
            <h2 className='text-2xl md:text-4xl pt-5 pb-5 md:pt-14 md:pb-10 text-center leading-10 text-gray-100' style={{ fontFamily: "'Montserrat', sans-serif" }}>¡Hola, somos Prismadeco!</h2>

            <p className='text-center tracking-wide text-gray-100 text-sm md:text-base leading-5 md:leading-7' style={{ fontFamily: "'Montserrat', sans-serif" }}>Somos una empresa dedicada a la decoración de interiores. Nos esforzamos día a día por dar<b>la mejor calidad y durabilidad a nuestros productos</b> , trabajando con materiales nobles como hierro y vidrio, ya que consideramos que partiendo de elementos básicos llegamos a lograr productos únicos de diseños especiales.<br />  Nos enfocamos en <b>la practicidad, utilidad, perdurabilidad y disfrute de nuestros clientes.</b> </p>
            <p className='pt-5 pb-10 tracking-wide text-slate-100 md:pb-20 text-sm md:text-base text-center leading-5 md:leading-7' style={{ fontFamily: "'Montserrat', sans-serif" }}>¡Desde ya les agradecemos la confianza en todo nuestro equipo y esperamos nos tengan por siempre dándole vida a sus hogares!</p>

          </div>
          <div className='min-h-72 min-w-44 md:h-auto w-full  bg-white relative '>

            <Image
              src="/81XYnQ6uyKL.jpg"
              alt="Descripción de la imagen"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className=" shadow-lg h-full object-contain object-left-top md:object-cover  "
              priority
            />
          </div>
        </section>
      </div>
      <style jsx>{`
      .margin {
        margin-bottom: -4rem;
      }`}</style>
    </>
  )
}

export default About