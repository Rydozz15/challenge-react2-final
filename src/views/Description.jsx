import { useContext } from "react"
import { useParams } from "react-router-dom";
import { PizzaContext, numberFormat } from "../context/PizzaContext"
import "./Description.css"

const Description = () =>{
    const { pizzas, pizzaCart, setPizzaCart } = useContext(PizzaContext)
    
    const { type } = useParams();

    const addCart = (id) => {
        const copyCart = [...pizzaCart]
        let chosenIndex = copyCart.findIndex((el) => el.id == id)
        pizzaCart[chosenIndex].quantity += 1
        setPizzaCart(copyCart)
    }

    return(
        <section className="pizza-description">
            {pizzas == null ? ""
                : 
                pizzas
                    .filter((el) => el.name == type)
                    .map((el) =>
                        <article className="card-description" key={el.id}>
                            <img src={el.img} alt="" />
                            <div className="card-text">
                                <h2>{el.name[0].toUpperCase()+el.name.substring(1)}</h2>
                                <hr className="divider"/>
                                <p>{el.desc}</p>
                                <p>Ingredientes</p>
                                <ul>
                                    {el.ingredients.map((ingredient) => <li key={ingredient}>{ingredient[0].toUpperCase()+ingredient.substring(1)}</li>)}
                                </ul>
                                <div className="price-section">
                                    <h1 className="price">Precio: {numberFormat(el.price)}</h1>
                                    <button onClick={() => addCart(el.id)}>
                                        Añadir
                                    </button>
                                </div>
                            </div>
                    </article>
                    )
                }
        </section>
    )
}

export default Description