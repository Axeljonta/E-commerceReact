import CarWidget from './CarWidget'; 
import {FaBars} from 'react-icons/fa'; 

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
               <a className="nav_a-menu"><li className="nav_li-menu">Inicio</li></a>
               <a className="nav_a-menu"><li className="nav_li-menu">Vinos</li></a>
               <a className="nav_a-menu"><li className="nav_li-menu">Espumantes</li></a>
               <a className="nav_a-menu"><li className="nav_li-menu">Cervezas</li></a>
               <a className="nav_a-menu"><li className="nav_li-menu">Destilados</li></a>
               <a className="nav_a-menu"><CarWidget/></a> 
             </ul> 
            </div>
        </nav>
    );
}

export default Navbar;