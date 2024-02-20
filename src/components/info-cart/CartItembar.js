
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { CartContext } from '@/context/CartContext';
import { montserrat } from '@/styles/fonts';

const CartItembar = ({ cartItem }) => {

    const { id, image, title, price, quantity } = cartItem;

    const { deleteFromCart } = useContext(CartContext); //destructuring

    return (
        <>
            <figure className='w-auto h-auto itembar mx-2 my-2'>
                <Image src={image} alt={title} width={70} height={80} />
                <div>
                    <h2 className='text-left text-base my-3 mx-4' style={montserrat.style}>{title}</h2>
                    <div className='flex'>
                        <h2 className='text-left text-base my-3' style={montserrat.style}>{quantity}x&nbsp;&nbsp;&nbsp;${price} = ${quantity * price}</h2>
                    </div>
                </div>
                <div className='gap-y-14 mx-2 py-9'>
                    <FontAwesomeIcon onClick={() => deleteFromCart(cartItem)} icon={faTrash} className='text-2xl w-5 h-5 text-gray cursor-pointer text-right' />
                </div>
            </figure>
            <hr className="border-stone-300"></hr>

            <style jsx>{`
            .itembar {
                display: grid;
                grid-template-columns: 1fr 4fr 1fr;
                column-gap: 0.5rem;
            }
            @media screen and (max-width: 576px){
                h2 {
                    font-size: 14px;
                }
            }
            `}</style>
        </>
    )
}

export default CartItembar


