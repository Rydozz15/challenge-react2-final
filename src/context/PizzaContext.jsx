import { useEffect, createContext, useState } from "react";
import axios from "axios";
const API_PIZZA = "/pizzas.json";

export const PizzaContext = createContext();

const PizzaProvider = ({ children }) => {
    const [pizzas, setPizza] = useState(null);
    const [pizzaApi, setPizzaApi] = useState(API_PIZZA)

    //Fetch
    useEffect(() => {
        fetchPizzas();
      }, [ , pizzaApi]);
            
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

    return (
        <PizzaContext.Provider value={{ pizzas, setPizza, pizzaApi, setPizzaApi }}>
            {children}
        </PizzaContext.Provider>
    );
};
export default PizzaProvider;