import * as s from "./CartPage.styled"
import CartPageItems from "./CartPageItems"

function CartPage(props) {
    const { cart, removeFromCart, total, confirmOrder } = props

    return (
        <s.Main>
            <s.ContainerSection>
                <h1>Carrinho de compras</h1>
                {cart.map((pizza) => {
                    return (
                        <s.DentroCarrinho>
                            <CartPageItems
                                key={pizza.name}
                                pizza={pizza}
                                removeFromCart={removeFromCart}
                            />
                        </s.DentroCarrinho>
                    )
                })}

                <s.TotalConfirma>
                    <h2>Total: {total.toLocaleString(
                        'na-us',
                        { style: 'currency', currency: 'USD' }
                    )}
                    </h2>
                    <s.ButtonPlaceOrder onClick={confirmOrder} >Confirmar pedido</s.ButtonPlaceOrder>
                </s.TotalConfirma>
            </s.ContainerSection>
        </s.Main>
    )
}

export default CartPage