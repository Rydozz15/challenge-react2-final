import { useContext } from "react"
import { Link } from "react-router-dom"
import { PizzaContext, numberFormat } from "../context/PizzaContext"
import logo from "../assets/imgs/logo.svg"
import "./Navbar.css"

const Navbar = () =>{
    const { pizzas, totalCartDisplay } = useContext(PizzaContext)

    return(
        <nav>
            <div>
                <Link to={"/"}> <img src={logo} alt="Pizza Logo" /> </Link>
                <h1>La Michi Pizzeria</h1>
            </div>
            <div>
                <Link to={"/cart"}><h1 className="cart-icon">🛒</h1> </Link>
                {pizzas !== null ?
                <h2>{numberFormat(totalCartDisplay)}</h2>
                : ""}
            </div>
        </nav>
    )
}

export default Navbar