import { useContext } from "react";
import { CartContext } from "./CartContex";
import styles from './styles/cartStyles.module.css'



function Cart() {
    const test = useContext(CartContext)
    console.log('hola', test.cartList);
    let result = (a, b) => (a * b);
    console.log(test.deleteItem);
    return (
        <div>
            <h2 className={styles.cartTitleCont}>Tus compras:</h2>
            <div className={styles.cartContainer}>
                <div className={styles.cartProduct1}>
                    {test.cartList.length > 0 ?
                        test.cartList.map(item =>

                            <div className={styles.cartProduct}>
                                <img src={item.imgData} alt="" className={styles.cartImg} />
                                <div className={styles.cartProductInf}>
                                <div className={styles.cartDivH4}>
                                    <h4 className={styles.cartH4}>Nombre: {item.nameData}</h4>
                                    <h4 className={styles.cartElim} onClick={() => test.deleteItem(item.idData)}>DELETE</h4>
                                </div> 
                                <div className={styles.cartDivH4}>
                                    <h4 className={styles.cartH4}>Cantidad: {item.cantData}/${item.priceData}</h4>
                                    <h4>Total:{result(item.cantData, item.priceData)}</h4>
                                </div>
                                </div>
                            </div>)
                        : <h2>sin productos</h2>}
                </div>
                <div className={styles.subTotal}>
                    <h2> Total a pagar:</h2> 
                    { 
                    test.cartList.length > 0 && 
                    <h3>${test.calcSubTotal()}</h3>
                    }
                </div>
            </div>
        </div>
    )
}

export default Cart; 