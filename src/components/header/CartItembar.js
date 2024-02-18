
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const CartItembar = ({ cartItem }) => {

    const { image, title, price } = cartItem;

    return (
        <>
            <figure className='w-auto h-auto itembar'>
                <Image src={image} alt={title} width={70} height={80} />
                <div>
                    <h2 className='text-left text-sm my-3 mx-4'>{title}</h2>
                    <h2 className='text-left text-xl my-3'>1 x ${price}</h2>
                    
                
                
                </div>
                <div className='gap-y-3 gap-y-14 mx-2 py-9'>
                    <FontAwesomeIcon icon={faTrash} className='text-2xl w-5 h-5 text-gray cursor-pointer text-right'/>
                </div>
            </figure>
            <hr className="border-stone-300"></hr>
            <style jsx>{`
            .itembar {
                display: grid;
                grid-template-columns: 1fr 4fr 1fr;
                column-gap: 0.5rem;
                
            }
            // figure { flex flex-row my-3
            //     box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.4);
            // }
            // @media screen and (min-width: 768px) {
            //     h2 {
            //         font-size: 1.6rem;
            //     }}

            // @media screen and (min-width: 576px) {
            //     h2 {
            //         font-size: 1rem;
            //     }
            // }
            // `}</style>
        </>
    )
}

export default CartItembar


