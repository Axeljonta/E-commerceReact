import {useState, useEffect} from 'react';
import {AiOutlinePlus, AiOutlineLine} from 'react-icons/ai'; 
import styles from './styles/ItemDetailStyles.module.css'

function ItemCount ({stock, initial, onAdd}){ 
    const [data, setData] = useState(0); 
    
    //para que se ejecute solo la primera vez que se ejecute
    useEffect (()=> { 
        setData(initial);
    },[]);
    return( 
        <div className={styles.itemc}>
            <div className={styles.itemcCount}>
               <button onClick={()=>{if (data > initial) setData(data-1)}}><AiOutlineLine/></button>
               <span>{data}</span>
               <button onClick={()=>{if (data < stock){setData(data+1)}}}><AiOutlinePlus/></button>
            </div> 
            <button className={styles.itemcButtonCar} onClick={()=> onAdd(data)}>Agregar al carrito</button>
        </div>
    )

}

export default ItemCount