import { useContext } from "react"
import { PizzaContext } from "../context/PizzaContext"
import "./Description.css"

const Description = () =>{
    const { pizzas } = useContext(PizzaContext)
    return(
        <section className="pizza-description">
            {pizzas == null ? ""
                : pizzas.map((el) =>
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
                                <h1 className="price">Precio: {el.price}</h1>
                                <button>
                                    Añadir
                                </button>
                            </div>
                        </div>
                </article>
                )}
        </section>
    )
}

export default Description