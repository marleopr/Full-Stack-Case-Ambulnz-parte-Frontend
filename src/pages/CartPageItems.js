import * as s from "./CartPageItems.styled"

function CartPageItems(props) {
    const { pizza, removeFromCart } = props

    return (
        <s.ContainerLi>
            <p>
                Pizza {pizza.name}
                - {pizza.price.toLocaleString(
                    'na-US',
                    { style: 'currency', currency: 'USD' }
                )}
                {" "} x {pizza.quantity}</p>
            <button onClick={() => removeFromCart(pizza)} >Remover item</button>
        </s.ContainerLi>
    )
}

export default CartPageItems