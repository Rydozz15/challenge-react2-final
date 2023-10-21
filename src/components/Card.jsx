import { useContext } from "react"
import { PizzaContext, numberFormat } from "../context/PizzaContext"
import { Link } from "react-router-dom"
import "./Card.css"

const Card = () =>{
    const { pizzas, pizzaCart, setPizzaCart } = useContext(PizzaContext)
    const addCart = (id) => {
        const copyCart = [...pizzaCart]
        let chosenIndex = copyCart.findIndex((el) => el.id == id)
        copyCart[chosenIndex].quantity += 1
        setPizzaCart(copyCart)
    }
    return(
        <section className="pizza-display">
            {pizzas == null ? ""
                : pizzas.map((el) =>
                    <article className="card" key={el.id}>
                        <img src={el.img} alt="" />
                        <h2>{el.name[0].toUpperCase()+el.name.substring(1)}</h2>
                        <hr className="divider"/>
                        <h3>Ingredientes</h3>
                        <ul>
                            {el.ingredients.map((ingredient) => <li key={ingredient}>{ingredient[0].toUpperCase()+ingredient.substring(1)}</li>)}
                        </ul>
                        <hr className="divider"/>
                        <h1 className="price">{numberFormat(el.price)}</h1>
                        <div className="buttons-card">
                            <button>
                                <Link to={`/pizza/${el.name}`}>Ver más</Link>
                            </button>
                            <button onClick={() => addCart(el.id)}>
                                Añadir
                            </button>
                    </div>
                </article>
                )}
        </section>
    )
}

export default Card