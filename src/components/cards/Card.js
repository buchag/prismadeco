
import Button from './Button';
import Image from 'next/image';


const Card = ({product}) => {

    const {image, title, price} = product;

    return (
    <>
        <figure className='w-auto h-auto rounded-lg flex flex-col'>
            <Image src={image} alt={title} width={350} height={400} style={{borderTopLeftRadius: "12px", borderTopRightRadius: "12px"}}/>
            <div>
                <h2 className='text-left text-xl my-1 mx-2'>{title}</h2>
                <h2 className='text-left text-xl my-1 mx-2'><b>${price}</b></h2>
            </div>
            <Button btnText="Comprar"/>
        </figure>

        <style jsx>{`
            figure {
                box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.4);
            }
            `}</style> 
    </>
  )
}

export default Card


