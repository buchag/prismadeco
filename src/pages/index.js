
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
import CartContextProvider  from './../context/CartContext';
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
      <CartContextProvider>
        <Navbar />
        <div className="home">
            <Home />
        </div>
        <section id="servicios">
            <Carousel />
        </section>
        <section id="nosotros">
            <About />
        </section>
        <section id="productos">
            <CardList />
        </section>
      </CartContextProvider>
      <Us />
      <Footer />
    </>
  );
};
export default index;
