import * as s from "./CartPage.styled"
import CartPageItems from "./CartPageItems"

function CartPage(props) {
    const { cart, removeFromCart, total, confirmOrder } = props

    return (
        <s.ContainerSection>
            <h1>
                Carrinho de compras</h1>
            {cart.map((pizza) => {
                return (
                    <CartPageItems
                        key={pizza.name}
                        pizza={pizza}
                        removeFromCart={removeFromCart}
                    />
                )
            })}

            <h2>Total: {total.toLocaleString(
                'na-us',
                { style: 'currency', currency: 'USD' }
            )}
            </h2>
            <button onClick={confirmOrder} >Confirmar pedido</button>
        </s.ContainerSection>
    )
}

export default CartPage