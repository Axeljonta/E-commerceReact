import {BsCart4} from 'react-icons/bs'; 
import {FaBars} from 'react-icons/fa'; 

const Navbar = () => {
    return( 
        <nav className="nav">    
           <div className="nav_div-logo"> 
               <h2>Chupy</h2> 
               <h4>Delivery de bebidas</h4>
           </div>    
           <div className="nav_div-menu"> 
           <div className='icon icon-res dpNone'>
                <FaBars/>
             </div>
             <ul className="nav_ul-menu">
               <a className="nav_a-menu"><li className="nav_li-menu">Inicio</li></a>
               <a className="nav_a-menu"><li className="nav_li-menu">Bebidas</li></a>
               <a className="nav_a-menu"><li className="nav_li-menu">Promos</li></a>
               <a className="nav_a-menu"><li className="nav_li-menu">Contacto</li></a> 
               <a className="nav_a-menu"><li className="nav_li-menu icon"><BsCart4/></li></a> 
             </ul> 
            </div>
        </nav>
    );
}

export default Navbar;