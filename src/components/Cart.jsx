import { useContext } from "react";
import { CartContext } from "./CartContex"; 
import styles from './styles/cartStyles.module.css'



function Cart() {
    const test = useContext(CartContext)   
    console.log('hola', test.cartList);
   return( 
       <div> 
        <h2 className={styles.cartTitleCont}>Tus compras:</h2>  
        <div className={styles.cartContainer}>  
        <div className={styles.cartProduct1}>
       {test.cartList.length>0 ?  
       test.cartList.map( item=>
       <div className={styles.cartProduct}>   
       <img src={item.imgData} alt="" className={styles.cartImg}/> 
       <div className={styles.cartDivH4}>
       <h4 className={styles.cartH4}>Nombre: {item.nameData}</h4>  
       <h4 className={styles.cartH4}>Cantidad: {item.cantData}</h4>
       </div> 
       <h4 className={styles.cartElim} onClick={() => test.deleteItem(item.idData)}>delete</h4>
       </div>)
       
       :<h2>sin productos</h2>}
       </div>
       <div className={styles.subTotal}>
           <h2> Total a pagar:</h2>
       </div>
       </div>
       </div>
   )
} 

export default Cart; 