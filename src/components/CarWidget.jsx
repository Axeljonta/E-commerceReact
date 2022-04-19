import {BsCart4} from 'react-icons/bs'; 
import styles from './styles/navStyles.module.css';  

function CarWidget (){
    return (
        <li className={`${styles.navLiMenu} ${styles.icon} ${styles.iconCar}`}><BsCart4/><span className={styles.iconCarText}>4</span></li>
    )
}

export default CarWidget;