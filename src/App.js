import { useState, useEffect } from "react";
import styled from "styled-components";
import CartPage from "./pages/CartPage";
import PizzasMenuPage from "./pages/PizzasMenuPage";
import axios from "axios"
import { BASE_URL } from "./constants/BASE_URL";
import OrderSucessPopup from "./components/OrderSucessPopup";

export const ContainerMain = styled.main`
  display: flex;
`

function App() {
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)

  const [orderSucessPopupState, setOrderSucessPopupState] = useState({
    isActive: false,
    summary: {
      id: null,
      pizzas: null,
      total: null
    }
  })

  useEffect(() => {
    calculateTotal()
  }, [cart])

  const addToCart = (pizzaToAdd) => {
    // -1 se a pizza não existir
    // 0 pra cima se ela existir
    const foundIndex = cart.findIndex((pizzaInCart) => {
      return pizzaInCart.name === pizzaToAdd.name
    })

    if (foundIndex >= 0) {
      const newCart = [...cart]
      newCart[foundIndex].quantity += 1

      setCart(newCart)
    } else {
      const newCart = [...cart]
      const newPizza = {
        name: pizzaToAdd.name,
        price: pizzaToAdd.price,
        quantity: 1
      }

      newCart.push(newPizza)
      setCart(newCart)
    }
  }

  // Remover do carrinho:

  const removeFromCart = (pizzaToRemove) => {
    // se a pizza possuir quantidade maior que 1
    // remover 1 da quantidade

    // senao
    // remover o item inteiro do carrinho

    if (pizzaToRemove.quantity > 1) {
      const newCart = cart.map((pizza) => {
        if (pizza.name === pizzaToRemove.name) {
          pizza.quantity -= 1
        }

        return pizza
      })

      setCart(newCart)

    } else {
      const newCart = cart.filter((pizza) => {
        return pizza.name !== pizzaToRemove.name
      })

      setCart(newCart)
    }
  }

  const calculateTotal = () => {
    const total = cart.reduce(
      (acc, item) => acc + (item.price * item.quantity),
      0
    )

    setTotal(total)
  }


  const confirmOrder = async () => {
    try {
      const body = {
        pizzas: cart

      }

      const res = await axios.post(`${BASE_URL}/orders`, body)

      setOrderSucessPopupState({
        isActive: true,
        summary: res.data.order
      })

      setCart([])

    } catch (error) {
      console.log(error)
    }
  }

  const closePopup = () => {
    setOrderSucessPopupState({
      isActive: false,
      summary: {
        id: null,
        pizzas: null,
        total: null
      }
    })
  }

  return (
    <ContainerMain>
      <PizzasMenuPage addToCart={addToCart} />
      <CartPage
        cart={cart}
        removeFromCart={removeFromCart}
        total={total}
        confirmOrder={confirmOrder}
      />
      {orderSucessPopupState.isActive
        && <OrderSucessPopup
          order={orderSucessPopupState.summary}
          closePopup={closePopup}
        />}
    </ContainerMain>
  );
}

export default App;