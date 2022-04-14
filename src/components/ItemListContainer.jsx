import { useState, useEffect } from "react";
import ItemList from "./itemList";
import customFetch from '../utils/customFecth'; 
const {product} = require('../utils/product')

function ItemListContainer (){ 
    
    const [bebidas, setBebidas] = useState([]); 

        useEffect(() =>{ 
            customFetch(2000, product) 
            .then(res=>setBebidas(res)) 
            .catch(err => console.log(err));
        },[]);
    

    
    return( 
        <>
        <div className='itemCount'> 
          <ItemList date= {bebidas}/>
        </div>
        </>
    )
}



export default ItemListContainer;