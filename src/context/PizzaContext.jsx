import { useEffect, createContext, useState } from "react";
import axios from "axios";
const API_PIZZA = "/pizzas.json";

export const PizzaContext = createContext();


const PizzaProvider = ({ children }) => {
    const [pizzas, setPizza] = useState(null);
    const [pizzaApi, setPizzaApi] = useState(API_PIZZA)
    const [pizzaCart,setPizzaCart] = useState([])
    const [totalCartDisplay, setTotalCartDisplay] = useState(0)

    //Fetch
    useEffect(() => {
        fetchPizzas();
        console.log("Paso 1")
        console.log(pizzas)
      }, []);
            
      const fetchPizzas = async ()=> {
        axios
          .get(pizzaApi)
          .then((response) => {
            setPizza(response.data)
          })
          .catch((err) => {
            console.log("Fetch API error:", err);
          });
      };

    //Shopping cart
    useEffect(() => {
        if(pizzas !== null){
            cartMount(pizzas);
            console.log("Eureka")
            console.log(pizzaCart)
            
        }
      }, [pizzas]);
    

    const cartMount = ( apiElement ) =>{
        let cart = []
        apiElement.map((el) => {
            const container = {}

            container.id = el.id
            container.product = el.name;
            container.price = el.price;
            container.image = el.img;
            container.quantity = 0
            
            cart.push(container)
        })
        setPizzaCart(cart)
    }
    
    //Shopping cart Total (Calculator)
    useEffect(() => {
          calculator();
          console.log("Se activó Shopping cart Total (Calculator)")
    }, [pizzaCart]);

    const calculator = () => {
      let total = 0
      pizzaCart.forEach((el) => {let result = el.price * el.quantity; total += result})
      setTotalCartDisplay(total)
  }

    return (
        <PizzaContext.Provider value={{ pizzas, setPizza, pizzaApi, setPizzaApi, pizzaCart, setPizzaCart, totalCartDisplay, setTotalCartDisplay }}>
            {children}
        </PizzaContext.Provider>
    );
};
export default PizzaProvider;