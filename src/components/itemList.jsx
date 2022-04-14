import Item from './item'; 
import ItemCount from './ItemCount';

const itemList = ({bebidas}) => { 
    return(
        <div className='itemL'> 
        {bebidas.length > 0?
        bebidas.map(bebida => <Item key={bebida.id} name={bebida.name} price={bebida.price} img={bebida.img} category={bebida.categoryId}/>):<p>Cargando...</p> 
        } 
        </div>
    )
} 

export default itemList;