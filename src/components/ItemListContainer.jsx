import { useState, useEffect } from "react";
import customFetch from '../utils/customFecth' 
import ItemList from "./itemList"; 
import {useParams} from 'react-router'
const {product} = require('../utils/product')

function ItemListContainer (){ 
    
    const [bebidas, setBebidas] = useState([]);  
    const {idCategory}= useParams();

        useEffect(() =>{ 
            customFetch(2000, product.filter(item=>{if (idCategory === undefined) return item;
                return item.categoryId === parseInt(idCategory)
            })) 
            .then(res=>setBebidas(res)) 
            .catch(err => console.log(err));
        },[bebidas]);
    

    
    return( 
        <>
        <div className='itemCount'> 
          <ItemList inf= {bebidas}/>
        </div>
        </>
    )
}



export default ItemListContainer;