import * as s from "./PizzaCard.styled"

import imgmargherita from '../../assets/img/margherita.jpg'
import imgbufala from '../../assets/img/bufala.jpg'
import imgdiavola from '../../assets/img/diavola.jpg'
import imgbianca from '../../assets/img/bianca.jpg'
import imgromana from '../../assets/img/romana.jpg'

function PizzaCard(props) {
    const { pizza, addToCart, pizzaName } = props

    const pizzaImagens = (pizzaName) => {
        if (pizzaName === 'Bufala') {
            return imgbufala
        } if (pizzaName === 'Diavola') {
            return imgdiavola
        } if (pizzaName === 'Margherita') {
            return imgmargherita
        } if (pizzaName === 'Pizza Bianca') {
            return imgbianca
        } if (pizzaName === 'Romana') {
            return imgromana
        }
    }

    return (
        <s.Main>
            <s.ContainerLi>
                <h3>{pizza.name}</h3>
                <s.ImagemPizza src={pizzaImagens(pizzaName)} />
                <h2 className="card-price">
                    {pizza.price.toLocaleString(
                        'na-us',
                        { style: 'currency', currency: 'USD' }
                    )}
                </h2>
                <s.Ingredientes>
                    {pizza.ingredients.map((item) => {
                        return (
                            <span key={item}>{`${item} `}</span>
                        )
                    })}
                </s.Ingredientes>
                <s.ButtonAdd onClick={() => addToCart(pizza)}>Adicionar</s.ButtonAdd>
            </s.ContainerLi>
        </s.Main>
    )
}

export default PizzaCard