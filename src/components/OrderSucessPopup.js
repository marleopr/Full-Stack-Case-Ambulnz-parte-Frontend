import * as s from "./OrderSucessPopup.styled"

function OrderSucessPopup(props) {
    const { order, closePopup } = props

    return (
        <s.ContainerDiv>
            <div>
                <h2>Pedido realizado com sucesso!</h2>
                <h3>Resumo do pedido:</h3>
                <p>Id do pedido: {order.id}</p>
                {order.pizzas.map((pizza) => (
                    <p key={pizza.name} >
                        Pizza {pizza.name} {" "}
                        - {pizza.price.toLocaleString(
                            'na-US',
                            { style: 'currency', currency: 'USD' }
                        )}
                        {" "} x {pizza.quantity}
                    </p>
                ))}
                <p>Total pago: {order.total.toLocaleString(
                    'na-US',
                    { style: 'currency', currency: 'USD' }
                )}
                </p>
                <span
                    className="close-popup"
                    onClick={closePopup}
                >
                    x
                </span>
            </div>
        </s.ContainerDiv>
    )
}

export default OrderSucessPopup