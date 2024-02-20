import Head from "next/head";
//import { useEffect, useState } from 'react';
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import styles from "@/components/styles/home.module.css";
import Image from "next/image";
import imagen from "@/components/imagenes/prismadeco.ico";
import home from "@/components/imagenes/espejo3.avif";

const Home = () => {
  const controls = useAnimation();
  /*  const [scrollPos,setScrollPos]=useState(0)

  useEffect(()=>{
    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };
  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
  },[]);

  useEffect(()=>{
    controls.start({
      opacity:1,
      y:0,
      filter: `blur(${Math.min(scrollPos/4, 4)}px)`,
      transition:{duration: 0.3, ease:'linear'},
    });
  },[controls,scrollPos])*/

  useEffect(() => {
    controls.start({ opacity: 1, y: 0, transition: { duration: 0.9 } });
  }, [controls]);
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={controls}
        exit={{ opacity: 0, y: -50 }}
        className={styles.contenedorHome}
      >
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <div className={styles.contenedorHome}>
          <Image
            src={home}
            alt="background-home"
            className={styles.homeImagen}
          />
          {/*<Image scr={home} alt='background-home' className='h-auto max-w-lg transition-all duration-300 rounded-lg blur-sm hover:blur-none'/>*/}
          <div className={styles.contenido}>
            <div className={styles.parrafoPrincipal}>
              <div className={styles.homeTexto}>
                <h1 className={styles.Titulo}>Bienvenidos!</h1>
                <p className={styles.Descripcion}>
                  Somos Prismadeco. Una empresa dedicada a la decoración de
                  interiores y exteriores. Nos especializamos en crear espacios
                  únicos y personalizados que se adaptan a las necesidades y
                  gustos de cada cliente. Nuestra misión es ofrecer a nuestros
                  clientes un servicio de calidad y profesionalismo.
                </p>
              </div>
              <a href="#nosotros" className={styles.btnConocerMas}>
                <span> Conocer más </span>
              </a>
            </div>

            <div className={styles.contenedorLogo} >
              {/* <img src={imagen} alt="Prismadeco Logo" />*/}
              <Image
                src={imagen}
                alt="Prismadeco Logo"
                className={styles.imgLogo}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Home;
