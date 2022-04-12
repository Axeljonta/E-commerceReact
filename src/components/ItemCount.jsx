import {useState, useEffect} from 'react';
import {AiOutlinePlus, AiOutlineLine} from 'react-icons/ai'; 

function ItemCount ({stock, initial}){ 
    const [data, setData] = useState(0); 
    
    //para que se ejecute solo la primera vez que se ejecute
    useEffect (()=> {
        setData(initial);
    },[]);
    return( 
        <div className='itemc'>
            <div className='itemc-count'>
               <button onClick={()=>{if (data > initial) setData(data-1)}}><AiOutlineLine/></button>
               <span>{data}</span>
               <button onClick={()=>{if (data < stock){setData(data+1)}}}><AiOutlinePlus/></button>
            </div> 
            <button className='itemc-button-car'>Agregar al carrito</button>
        </div>
    )

}

export default ItemCount