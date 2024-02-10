
const Button = ({ onClick }) => {
    return (
        <>
            <button className="bg-zinc-500 text-white text-sm my-3 mx-auto py-1 px-5 hover:bg-zinc-600 hover:scale-105 hover:shadow-lg
            rounded-lg cursor-pointer whitespace-nowrap" onClick={ onClick }>Comprar</button>

            <style jsx>{`
                button {
                    box-shadow: 2px 2px 2px black;
                }
                @media sreen and (min-width: 1024px) {
                    button {
                        font-size: 1.6rem; 
                    }
                }
                @media screen and (min-width: 640px) {
                    button {
                        font-size: 1rem;
                    }
                
            }
            `}</style>
        </>
    )
}

export default Button
