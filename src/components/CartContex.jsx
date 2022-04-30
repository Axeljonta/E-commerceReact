import { createContext, useState } from 'react';


export const CartContext = createContext(); 

const CartContextProvider = ({children}) => {
 
const addToCart = (data,cant) => {
    let found = cartList.find(product => product.idData === data.id);  
    if( found === undefined ) {
    setCartList([...cartList, 
        { 
        idData: data.id, 
        priceData: data.price,
        imgData: data.img,
        nameData: data.name,
        cantData: cant,
        }
                ]
               )              }
               else{
                found.cantData += cant;
                setCartList([
                    ...cartList
                ])
               }
}  

const calcTotalPerData = (idData) => {
    let index = cartList.map(data => data.idData).indexOf(idData);
    return cartList[index].priceData * cartList[index].cantData;
}

const calcSubTotal = () => {
    let totalPerData = cartList.map(data => calcTotalPerData(data.idData));
    return totalPerData.reduce((a, b) => a + b);
}

const deleteItem = (id) => {
    let result = cartList.filter(data => data.idData !== id);
    setCartList(result);
}

const removeList = () => {
    setCartList([]);
}

const calcDataCant = () => {
    let cants = cartList.map(data => data.cantData);
    return cants.reduce(((a, b) => a + b), 0);
}
    const[cartList, setCartList]= useState([])   
    return(
        <CartContext.Provider value={{cartList, removeList, addToCart, deleteItem, calcSubTotal, calcTotalPerData, calcDataCant}}>
                {children}
        </CartContext.Provider>
    )
} 
export default CartContextProvider


