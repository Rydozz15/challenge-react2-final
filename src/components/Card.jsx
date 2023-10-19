import { useContext } from "react"
import { PizzaContext } from "../context/PizzaContext"
import "./Card.css"

const Card = () =>{
    const { pizzas } = useContext(PizzaContext)
    console.log(pizzas)
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
                            {el.ingredients.map((ingredient) => <li key={ingredient}>{ingredient}</li>)}
                        </ul>
                        <hr className="divider"/>
                        <h1 className="price">{el.price}</h1>
                        <div className="buttons-card">
                            <button>
                                Ver más
                            </button>
                            <button>
                                Añadir
                            </button>
                    </div>
                </article>
                )}
        </section>
    )
}

export default Card