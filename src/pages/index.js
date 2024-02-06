import Head from "next/head";
import Image from "next/image";
import About from "@/components/aboutUs/About";
import Us from "@/components/aboutUs/Us";
import { Inter } from "next/font/google";
import Carousel from "../components/carousel/carousel";
import CardList from "@/components/cards/CardList";
import Footer from "../components/footer/Footer";
import { Component } from "react";
import axios from "axios";
import Home from "@/components/home/Home";
import Navbar from "@/components/header/Navbar";
import Banner from "@/components/header/Banner";
const inter = Inter({ subsets: ["latin"] });

const index = () => {
  return (
    <>
      {/* Head contiene titulo de la pestaña y el icono de prisma */}
      <Head>
        <title>PRISMA DECO</title>
        <meta name="description" content="Prisma Deco" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/iconprisma.png" />
      </Head>

      <main>
        <Banner />
        <Navbar />

        <Home />


        <div id="servicios">
        <Carousel />


        </div>

      
      

        <About />

        <section>
          <CardList />
        </section>
        <Us />

        <Footer />
      </main>
    </>
  );
};
export default index;
