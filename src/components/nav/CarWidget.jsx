import {BsCart4} from 'react-icons/bs';  
import ItemListContainer from './ItemListContainer';
import Cantidad from'./ItemListContainer' 

function CarWidget (){
    return (
        <li className="nav_li-menu icon icon-car"><BsCart4/><Cantidad/></li>
    )
}

export default CarWidget;