import { createContext, useState } from 'react';


export const CartContext = createContext(); 

const CartContextProvider = ({children}) => {
 
const addToCart = (data,cant) => { 
    setCartList([...cartList, 
        { 
        idData: data.id,
        imgData: data.img,
        nameData: data.name,
        cantData: cant,
    }]);
} 
const deleteItem = (id) => {
    let result = cartList.filter(data => data.idData != id);
    setCartList(result);
}
    const[cartList, setCartList]= useState([])   
    return(
        <CartContext.Provider value={{cartList,addToCart,deleteItem}}>
                {children}
        </CartContext.Provider>
    )
} 
export default CartContextProvider


