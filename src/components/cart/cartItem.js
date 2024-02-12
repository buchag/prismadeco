
const cartItem = ({item, deleteFromCart}) => {
    const {id, name, price, quantity} = item;
  return (
    <div className="cart-item">
        <h4>{name}</h4>
        <h5>{quantity}</h5>
        <h5>$ {price} </h5>
        <button onClick={() => deleteFromCart(id, false)}>Eliminar uno</button> 
        <button onClick={() => deleteFromCart(id, true)}>Eliminar todos</button>
    </div>
  )
}

export default cartItem