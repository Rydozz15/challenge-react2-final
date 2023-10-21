import { useContext } from "react"
import { PizzaContext } from "../context/PizzaContext"
import "./ShoppingCart.css"

const ShoppingCart = () =>{
    const { pizzaCart, setPizzaCart } = useContext(PizzaContext)

    const addSubtractCart = (id, action) => {
        const copyCart = [...pizzaCart]
        let chosenIndex = copyCart.findIndex((el) => el.id == id)
        if (action == "add"){
            copyCart[chosenIndex].quantity += 1
        }
        else if (action == "sub" && copyCart[chosenIndex].quantity > 0) {
            copyCart[chosenIndex].quantity -= 1
        }
        setPizzaCart(copyCart)
    }

    return(
        <section className="shopping-description">
            {pizzaCart == [] ? ""
                : pizzaCart.map((el) => {
                if (el.quantity > 0) {
                    return (
                        <article className="card-shopping" key={el.id}>
                            <div className="card-product">
                                <img src={el.image} alt="" />
                                <h2>{el.product[0].toUpperCase()+el.product.substring(1)}</h2>
                            </div>
                            <div className="card-price">
                                <h3 className="price">{el.price * el.quantity}</h3>
                                <button onClick={() => addSubtractCart(el.id, "add")}>
                                        +
                                </button>
                                <h2>{el.quantity}</h2>
                                <button onClick={() => addSubtractCart(el.id, "sub")}>
                                    -
                                </button>
                            </div>
                    </article>)}
                return null}
                    )}
        </section>
    )
}

export default ShoppingCart