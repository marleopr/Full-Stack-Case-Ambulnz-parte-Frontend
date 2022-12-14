import * as s from "./CartPageItems.styled"

function CartPageItems(props) {
    const { pizza, removeFromCart } = props

    return (
        <s.EstiloItems>
            <s.ContainerLi>
                <p>
                    Pizza {pizza.name}
                    - {pizza.price.toLocaleString(
                        'na-US',
                        { style: 'currency', currency: 'USD' }
                    )}
                    {" "} x {pizza.quantity}
                </p>
                <s.ButtonRemove onClick={() => removeFromCart(pizza)}>X</s.ButtonRemove>
            </s.ContainerLi>
        </s.EstiloItems>
    )
}

export default CartPageItems