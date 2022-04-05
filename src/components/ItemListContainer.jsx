import { useState, useEffect } from "react";
import Fetch from '../utils/customFecth' 
import ItemList from "./itemList";
const {product} = require('../utils/product')

function ItemListContainer (){ 
    
    const [bebidas, setBebidas] = useState([]); 

        useEffect(() =>{ 
            Fetch(2000, product) 
            .then(res=>setBebidas(res)) 
            .catch(err => console.log(err));
        },[])
    

    
    return( 
        <div className='itemCount'> 
          <ItemList date= {bebidas}/>
        </div>
    )
}



export default ItemListContainer;