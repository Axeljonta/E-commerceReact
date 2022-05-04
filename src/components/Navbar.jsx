import CarWidget from './CarWidget'; 
import { Link } from "react-router-dom"; 
import styles from './styles/navStyles.module.css';

import {FaBars}  from 'react-icons/fa';
import {useState} from "react";
const Navbar = () => {
    
    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
      setActive(!isActive);
    };
    
    return( 
        
        <nav className={styles.nav}>    
           <div className={styles.navDivLogo}> 
               <h2>Chupy</h2> 
               <h4>Deliveri de bebidas</h4>
           </div>    
           <div className={styles.navDivMenu}> 
           <div onClick={toggleClass} className={`${styles.icon} ${styles.iconRes} ${styles.dpNone}` }>
                <FaBars/> 
           </div>
             <ul className={isActive ? `${styles.menuView}`: `${styles.navUlMenu}`}>
               <Link to='/' className={`${styles.link} ${styles.navAMenu}`}><li className={styles.navLiMenu}>Inicio</li></Link>
               <Link to='/category/1' className={`${styles.link} ${styles.navAMenu}`}><li className={styles.navLiMenu}>Destilados</li></Link>
               <Link to='/category/2' className={`${styles.link} ${styles.navAMenu}`}><li className={styles.navLiMenu}>Espumantes</li></Link>
               <Link to='/category/4' className={`${styles.link} ${styles.navAMenu}`}><li className={styles.navLiMenu}>Vinos</li></Link> 
               <Link to='/category/3' className={`${styles.link} ${styles.navAMenu}`}><li className={styles.navLiMenu}>Cervezas</li></Link> 
             </ul>  
             <Link to='/cart' className={`${styles.navLiMenu} ${styles.link} ${styles.navAMenu}`}><CarWidget/></Link> 
           </div>
        </nav>
    );
}

export default Navbar;