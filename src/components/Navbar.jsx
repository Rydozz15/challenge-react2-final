/* Resultados
const example = () => {
    let total = 0
    pizzaCart.forEach((el) => {let result = el.price * el.quantity; total += result})
    console.log(total)
} 
example()
*/
import { useContext, useState } from "react"
import { PizzaContext } from "../context/PizzaContext"
import logo from "../assets/imgs/logo.svg"

const Navbar = () =>{
    const { pizzas, pizzaCart, setPizzaCart, totalCartDisplay, setTotalCartDisplay } = useContext(PizzaContext)

    const calculator = () => {
        let total = 0
        pizzaCart.forEach((el) => {let result = el.price * el.quantity; total += result})
        setTotalCartDisplay(total)
    }
    
    const addSubtractCart = (id) => {
        let chosenIndex = pizzaCart.findIndex((el) => el.id == id)
        pizzaCart[chosenIndex].quantity += 1
        setPizzaCart(pizzaCart)
        calculator()
    }

    return(
        <nav>
            <div>
                <img src={logo} alt="" />
                <h1>La Michi Pizzeria</h1>
            </div>
            <div>
                <h3>🛒: </h3>
                {pizzas !== null ?
                <h2>{totalCartDisplay}</h2>
                : ""}
                <button onClick={() => addSubtractCart("P002")}> Agregar</button>
            </div>
        </nav>
    )
}

export default Navbar