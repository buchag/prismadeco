
import { Inter } from "next/font/google";
import Head from "next/head";
import Banner from "@/components/header/Banner";
import Navbar from "@/components/header/Navbar";
import Home from "@/components/home/Home";
import Carousel from "../components/carousel/carousel";
import About from "@/components/aboutUs/About";
import CardList from "@/components/cards/CardList";
import Us from "@/components/aboutUs/Us";
import Footer from "../components/footer/Footer";
import { CartProvider } from './../context/CartContext';
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
      <Banner />
      <Navbar />
      <Home />
      <section id="servicios">
          <Carousel />
      </section>
      <section id="nosotros">
          <About />
      </section>
      <CartProvider>
        <section id="productos">
          <CardList />
      </section>
      </CartProvider>
      
      <Us />
      <Footer />
    </>
  );
};
export default index;
