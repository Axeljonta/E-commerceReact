import { useContext, useState } from "react"
import ItemCount from "./ItemCount" 
import style from './styles/ItemDetailStyles.module.css' 
import Button from './ButtonCar'
import { CartContext } from "./CartContex"



function ItemDetail ({data}){
    
  const [dataCount, setDataCount]= useState(0) 
   
  const test = useContext(CartContext)
    
  const onAdd = (cant)=>{
      
    setDataCount(cant) 
      
    test.addToCart(data,cant)
    }    
    return(<>{  
            data.img 
            ?
            <div className={style.detailItem}>
                <img src={data.img} alt="producto" className={style.detailImg} /> 
                <div className={style.detailText}>
                  <h2>{data.name}</h2>
                  <h4>{data.description}</h4>
                  <h6>Existencias: {data.stock} unidades</h6> 
                  <h4>A solo: ${data.price}</h4>
                  {
                    dataCount === 0 ?
                  <ItemCount stock={data.stock} initial= {1} onAdd={onAdd}/>
                  :<Button/>
                  } 
                </div>
            </div>: <p>Cargando...</p>}
          </>
          )
} 
export default ItemDetail