
import Image from 'next/image';
import Modal from './Modal';

const Card = ({product}) => {

    const {image, title, price} = product;

    return (
    <>
        <figure className='bg-white w-auto h-auto rounded-xl flex flex-col'>
            <Image src={image} alt={title} width={350} height={400} style={{borderTopLeftRadius: "12px", borderTopRightRadius: "12px"}}/>
            <div>
                <h2 className='text-left text-sm my-1 mx-2'>{title}</h2>
                <h2 className='text-left text-sm my-1 mx-2'><b>${price}</b></h2>
            </div>
           <Modal key={product.id} product={product}/>
        </figure>

        <style jsx>{`
            figure {
                box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.4);
            }
            @media screen and (min-width: 768px) {
                h2 {
                    font-size: 1.6rem;
                }}

            @media screen and (min-width: 576px) {
                h2 {
                    font-size: 1rem;
                }
            }
            `}</style> 
    </>
  )
}

export default Card


