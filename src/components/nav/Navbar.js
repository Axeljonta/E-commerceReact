import CarWidget from './CarWidget'; 
import {FaBars} from 'react-icons/fa'; 
import { Link } from "react-router-dom";

const Navbar = () => {
    return( 
        <nav className="nav">    
           <div className="nav_div-logo"> 
               <h2>Chupy</h2> 
               <h4>Deliveri de bebidas</h4>
           </div>    
           <div className="nav_div-menu"> 
           <div className='icon icon-res dpNone'>
                <FaBars/>
             </div>
             <ul className="nav_ul-menu">
               <Link to='/' className="link nav_a-menu"><li className="nav_li-menu">Inicio</li></Link>
               <Link to='/category/1' className="link nav_a-menu"><li className="nav_li-menu">Destilados</li></Link>
               <Link to='/category/2' className="link nav_a-menu"><li className="nav_li-menu">Espumantes</li></Link>
               <Link to='/category/4' className="link nav_a-menu"><li className="nav_li-menu">Vinos</li></Link> 
               <Link to='/category/3' className="link nav_a-menu"><li className="nav_li-menu">Cervezas</li></Link> 
               <Link to='/' className="link nav_a-menu"><CarWidget/></Link> 
             </ul> 
            </div>
        </nav>
    );
}

export default Navbar;