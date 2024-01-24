
import Card from "./Card";
import { useState, useEffect } from "react";
import axios from "axios";

const products = [
    {
        id: 1000001,
        image: "/images/esp-mp-90180.jpeg",
        title: "Espejo medio punto 90x180",
        price: 67900,
        featured: true
    },
    {
        id: 1000002,
        image: "/images/esp-rect-rep.jpg",
        title: "Espejo rectangular repartido",
        price: 163500,
        featured: true
    },
    {
        id: 1000003,
        image: "/images/esp-recta-60100.jpeg",
        title: "Espejo rectangular 60x100",
        price: 73150,
        featured: false
    },
    {
        id: 1000004,
        image: "/images/esp-hexag.jpeg",
        title: "Espejos hexagonales",
        price: 163500,
        featured: true
    },
    {
        id: 1000005,
        image: "/images/esp-circle-40.png",
        title: "Espejo Circular 40cm",
        price: 27200,
        featured: false
    },
    {
        id: 100006,
        image: "/images/esp-circle-70.png",
        title: "Espejo Circular 70cm",
        price: 43500,
        featured: false
    },
    {
        id: 1000007,
        image: "/images/esp-recta-r7090.jpeg",
        title: "Esp.Rectangular Repartido. 70x90",
        price: 69900,
        featured: false
    },
    {
        id: 1000008,
        image: "/images/esp-recta-r90180.jpg",
        title: "Esp.Rectangular Repartido. 90x180",
        price: 118800,
        featured: true
    },
    {
        id: 1000009,
        image: "/images/lamp-col-03.jpg",
        title: "Lámpara Colgante Barral",
        price: 56000,
        featured: false
    },
    {
        id: 1000010,
        image: "/images/lamp-grecia.jpg",
        title: "Lámpara Grecia",
        price: 25600,
        featured: false
    },
    {
        id: 1000011,
        image: "/images/lamp-roma.jpg",
        title: "Lámpara Roma",
        price: 43000,
        featured: true
    },
    {
        id: 1000012,
        image: "/images/esp-circle-60.jpg",
        title: "Espejo Circular 60cm",
        price: 38700,
        featured: true
    }
]

const CardList = () => {

    return (
        <>
            <div>
                <h2>Articulos Destacados</h2>
                <h3>«Los más elegidos por nuestros clientes »</h3>

                <div className="flex justify-between my-2 mx-auto">
                    <div className="cards-list grid md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-x-8 gap-y-8 my-2 mx-auto">
                        {products.filter((product) => (product.featured === true)).map((product, id) =>
                            <Card key={id} product={product} />)}
                    </div>
                </div>
            </div>

            <div>
                <h2>Diseños Exclusivos</h2>
                <h3>« Reinventa tus espacios »</h3>

                <div className="flex justify-between my-2 mx-auto">
                    <div className="cards-list grid md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-x-8 gap-y-8 my-2 mx-auto">
                        {products.filter((product) => (product.featured === false)).map((product, id) =>
                            <Card key={id} product={product} />)}
                    </div>
                </div>
            </div>

            <style jsx>{`
            div h2 {
                font-size: 2.5rem;
                font-family: "Monserrat", sans-serif;
                font-weight: 500;
                letter-spacing: 0.15rem;
                color: black;
                text-align: center;
                margin-top: 3rem;
            }
            div h3 {
                font-size: 1rem;
                font-family: "Monserrat", sans-serif;
                color: #666666;
                text-align: center;
            }
            `}</style>
        </>
    )
}

export default CardList

