import { useContext } from "react"
import { PizzaContext } from "../context/PizzaContext"
import logo from "../assets/imgs/logo.svg"
import "./Navbar.css"

const Navbar = () =>{
    const { pizzas, pizzaCart, setPizzaCart, totalCartDisplay } = useContext(PizzaContext)
    
    const addSubtractCart = (id) => {
        const copyCart = [...pizzaCart]
        let chosenIndex = copyCart.findIndex((el) => el.id == id)
        pizzaCart[chosenIndex].quantity += 1
        setPizzaCart(copyCart)
    }

    return(
        <nav>
            <div>
                <img src={logo} alt="" />
                <h1>La Michi Pizzeria</h1>
            </div>
            <div>
                <h1>🛒: </h1>
                {pizzas !== null ?
                <h2>{totalCartDisplay}</h2>
                : ""}
                <button onClick={() => addSubtractCart("P002")}> Agregar</button>
            </div>
        </nav>
    )
}

export default Navbar