import {useState, useEffect} from 'react';
import {AiOutlinePlus, AiOutlineLine} from 'react-icons/ai'; 


function ItemCount ({stock, initial, onAdd}){ 
    const [data, setData] = useState(0); 
    
    //para que se ejecute solo la primera vez que se ejecute
    useEffect (()=> {
        setData(initial);
    },[]);
    //error en la linea 19 si solamente sumo uno en vez de sumer me lo suma como strig me aparece 01 y si aprieto devuelta 011, 0111,01111 por eso resto 1 y sumo 2 por que al restar no me sale el error, pero me gustaria saber que puedo hacer para arrglarlo o ver que estoy haciendo  mal 
    return(
        <div> 
            <h3>Producto</h3>
            <div>
               <button onClick={()=>{if (data > initial) setData(data-1)}}><AiOutlineLine/></button>
               <span>{data}</span>
               <button onClick={()=>{if (data < stock){ setData(data-1+2)}}}><AiOutlinePlus/></button>
            </div> 
            <button>Agregar al carrito</button>
        </div>
    )

}





export default ItemCount