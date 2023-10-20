import { useContext } from "react"
import { PizzaContext } from "../context/PizzaContext"
import logo from "../assets/imgs/logo.svg"
import "./Navbar.css"

const Navbar = () =>{
    const { pizzas, totalCartDisplay } = useContext(PizzaContext)

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
            </div>
        </nav>
    )
}

export default Navbar