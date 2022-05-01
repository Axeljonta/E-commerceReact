import { useContext, useState, useEffect } from 'react';
import {BsCart4} from 'react-icons/bs'; 
import styles from './styles/navStyles.module.css';  
import { CartContext } from "./CartContex"; 


function CarWidget (){
    const test = useContext(CartContext);  
    const [cants, setcants] = useState(0);
    
    
    //para que se ejecute solo la primera vez que se ejecute
    useEffect (()=> { 
        setcants(test.calcDataCant());
    },[test]);

    return (
        <li className={`${styles.navLiMenu} ${styles.icon} ${styles.iconCar}`}><BsCart4/> 
        { cants>0?
        <span className={styles.iconCarText}>{test.calcDataCant()}</span>:
        <></>
    }
        </li>
         
    )
}

export default CarWidget;