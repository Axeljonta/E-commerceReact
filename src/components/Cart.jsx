import { useContext } from "react";
import { CartContext } from "./CartContex";
import styles from './styles/cartStyles.module.css';
import { collection, doc, setDoc, serverTimestamp} from 'firebase/firestore';
import db from '../utils/firebaseConfig';


function Cart() {
    const test = useContext(CartContext)

    let result = (a, b) => (a * b);

    const checkout = () =>{ 

            const itemsForDB = test.cartList.map(item => ({
              id: item.idData,
              title: item.nameData,
              price: item.priceData, 
              cantidad: item.cantData,
            }));

        let order = {
            buyer: {
                name:'Tu mama',
                email:'tumama@gmail.com',
                phone: '1132343536'
            },
            items: itemsForDB ,
            date: serverTimestamp(), 
            total:test.calcSubTotal(),
        }

        const createOrderInFirestore = async () => {
            const newOrderRef = doc(collection(db, "orders"));
            await setDoc(newOrderRef, order);
            return newOrderRef;
          }
        
          createOrderInFirestore()
            .then(result => alert('Tu orden ya esta siendo procesada . ID d la orden: ' + result.id + ''))
            .then(test.removeList())
            .catch(err => console.log(err));
        
          

    }
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
                  </div>): 
                <h2>sin productos</h2>}
             </div>
             <div className={styles.subTotal}>
                <h2> Total a pagar:</h2> 
                 { 
                  test.cartList.length > 0 && 
                  <h3>${test.calcSubTotal()}</h3>
                 } 
                <button onClick={checkout}>COMPRAR</button>
             </div>
            </div>
        </div>
    )
}

export default Cart; 