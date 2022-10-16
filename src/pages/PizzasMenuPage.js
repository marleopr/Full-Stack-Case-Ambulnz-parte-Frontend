import axios from "axios"
import { useEffect, useState } from "react"
import PizzaCard from "../components/PizzaCard"
import { BASE_URL } from "../constants/BASE_URL"
import * as s from "./PizzaMenuPage.styled"

function PizzasMenuPage(props) {
    const { addToCart } = props

    const [pizzas, setPizzas] = useState([])

    useEffect(() => {
        axios.get(`${BASE_URL}/pizzas`)
            .then((res) => {
                setPizzas(res.data.pizzas)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    console.log("pizzas" ,pizzas)
    return (
        <s.Main>
        <s.ContainerSection>
            <ul>
                {pizzas.map((pizza) => {

                    return (
                        <PizzaCard
                            key={pizza.name}
                            pizza={pizza}
                            addToCart={addToCart}
                            pizzaName = {pizza.name}
                        />
                    )
                })}
            </ul>
        </s.ContainerSection>
        </s.Main>
    )
}

export default PizzasMenuPage