
import Card from "./Card";

import { useContext } from "react";
import { DataContext } from "@/context/DataContextProvider";


const CardList = () => {

    const database = useContext(DataContext);

    const [ products, cart ] = database

    return (
        <>
            <div className="home">
                <div className="pb-5">
                    <h2>Articulos Destacados</h2>
                    <h3>«Los más elegidos por nuestros clientes »</h3>

                    <div className="flex justify-between my-2 mx-auto">
                        <div className="cards-list grid md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-x-8 gap-y-8 my-2 mx-auto">
                            {products.filter((product) => (product.featured === true)).map((product, id) =>
                                <Card key={id} product={product} />)}
                        </div>
                    </div>
                </div>

                <div className="pb-5">
                    <h2 className="title-card">Diseños Exclusivos</h2>
                    <h3 className="subtitle-card">« Reinventa tus espacios »</h3>

                    <div className="flex justify-between my-2 mx-auto">
                        <div className="cards-list grid md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-x-8 gap-y-8 my-2 mx-auto">
                            {products.filter((product) => (product.featured === false)).map((product, id) =>
                                <Card key={id} product={product} />)}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
            div h2 {
                font-size: 1.2rem;
                font-family: "Monserrat", sans-serif;
                font-weight: 500;
                letter-spacing: 0.15rem;
                color: black;
                text-align: center;
                
            }
            div h3 {
                font-size: 0.75rem;
                font-family: "Monserrat", sans-serif;
                color: #666666;
                text-align: center;
            }
            @media screen and (min-width: 992px) {
                div h2 {
                    font-size: 2.8rem;
                }
                div h3 {
                    font-size: 1.5rem;
                }
            }
           
            @media screen and (min-width: 768px) {
                div h2 {
                    font-size: 2.4rem;
                }
                div h3 {
                    font-size: 1.25rem;
                }
            }

            @media screen and (min-width: 576px) {
                div h2 {
                    font-size: 2rem;
                }
                div h3 {
                    font-size: 1rem;
                }
            }
            `}</style>
        </>
    )
}

export default CardList

