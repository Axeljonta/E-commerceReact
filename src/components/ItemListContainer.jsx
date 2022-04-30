import { useState, useEffect } from "react";
import ItemList from "./itemList"; 
import {useParams} from 'react-router'
import { firestoreFetch } from '../utils/fireFech'

function ItemListContainer (){ 
    
    const [bebidas, setBebidas] = useState([]);  
    const {idCategory}= useParams();
 
    useEffect(() => {
        firestoreFetch(idCategory)
            .then(result => setBebidas(result))
            .catch(err => console.log(err));
    }, [idCategory]);
    return( 
        <>
        <div className='itemCount'> 
          <ItemList inf= {bebidas}/>
        </div>
        </>
    )
}



export default ItemListContainer;