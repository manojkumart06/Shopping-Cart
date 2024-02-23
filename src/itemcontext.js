import { createContext, useContext } from "react";
import { useState } from "react";
import  CartModal  from "./components/CartModal";

//Creating a context
export const itemContext = createContext();

//Consuming hook access,extracts and returns the value
function useValue(){
    const value = useContext(itemContext);
    return value;
}


//Provider Component
function CustomItemProvider ({children}) {
    const [total, setTotal] = useState(0);
    const [item, setItem] = useState(0);
    const [showCart,setShowCart] = useState(false);
    const [cart, setCart] = useState([]);

    //adding handling, manupulating and setting up logic
    const handleAdd = (prod) => {
        const index = cart.findIndex((item) => item.id === prod.id);

        if(index === -1){
            setCart([...cart, {...prod,qty:1}]);
            console.log(cart);
            setTotal(total+prod.price);
            
        }else{
            cart[index].qty++;
            setCart(cart);
            setTotal(total+cart[index].price);
        }

        setItem(item+1);
        
      };
    
      const handleRemove = (id) => {
        const index = cart.findIndex((item) => item.id === id);
        if(index !== -1){
            cart[index].qty--;
            setItem(item-1);
            setTotal(total-cart[index].price);
            if(cart[index].qty === 0){
                cart.splice(index,1);
            }
        }
        setCart(cart);
        

      };

      const resetButton = () =>{
        setTotal(0);
        setItem(0);
        setCart([]);
      }

      const toggleCart = () => {
        setShowCart(!showCart);
      }

    return (
        // default provider
        <itemContext.Provider value = {{item,total,handleAdd,handleRemove,resetButton,toggleCart,cart}}>
            {showCart && <CartModal />}
            {children}
        </itemContext.Provider>
    )
}

export {useValue};
export default CustomItemProvider;