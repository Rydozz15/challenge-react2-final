import Card from "../components/Card" 
import "./Home.css"

const Home = () =>{


    return(
        <>
            <article className="hero">
                <h1>¡Mishi Pizzeria!</h1>
                <h3>Tenemos las mejores pizzas que podrías encontrar, pelos de mishi incluidos</h3>
            </article>
            <Card />
        </>
    )
}

export default Home