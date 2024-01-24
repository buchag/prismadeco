

const Button = () => {
        
    return (
        <>
            <button className="bg-zinc-500 text-white text-xl my-3 mx-24 scroll-px-12 scroll-py-0
            rounded-2xl cursor-pointer whitespace-nowrap" >Comprar</button>

            <style jsx>{`
                button {
                    box-shadow: 2px 2px 2px black;
                }
                button:hover {
                    transform: scale(1.1);
                    transition: 0.2s;
                    background-color: rgb(63 63 70);
            }
            `}</style>
        </>
    )
}

export default Button
