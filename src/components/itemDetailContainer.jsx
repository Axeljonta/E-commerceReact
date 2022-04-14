import { useState, useEffect } from "react";
import ItemDetail from "./itemDetail";
import customFetch from '../utils/customFecth';
const {product} = require('../utils/product')

function ItemDetailContainer (){ 
    
    const [bebidas, setBebidas] = useState({}); 

        useEffect(() =>{ 
            customFetch(2000, product[0]) 
            .then(res=>setBebidas(res)) 
            .catch(err => console.log(err));
        },[])
    

    
    return( 
        <div className="detailItemCont"> 
          <ItemDetail data= {bebidas}/>
        </div>
    )
}

export default ItemDetailContainer