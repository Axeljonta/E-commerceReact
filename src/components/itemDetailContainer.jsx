import { useState, useEffect } from "react";
import customFetch from '../utils/customFecth' 
import ItemDetail from "./itemDetail";
import { useParams } from "react-router"; 
import style from './styles/ItemDetailStyles.module.css'
const {product} = require('../utils/product') 

function ItemDetailContainer (){ 
    
    const [bebidas, setBebidas] = useState({}); 
    const { idItem } = useParams();

        useEffect(() =>{ 
            customFetch(2000,  product.find(item => item.id === parseInt(idItem))) 
            .then(res=>setBebidas(res)) 
            .catch(err => console.log(err));
        },[])
    

    
    return( 
        <div className={style.detailItemCont}> 
          <ItemDetail data= {bebidas}/>
        </div>
    )
}

export default ItemDetailContainer