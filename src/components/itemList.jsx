import Item from './item'; 
import ItemCount from './ItemCount';


const itemList = ({date}) => { 
    return(
        <> 
        {
        date.map(item => <div className='itemc'>
                              <Item key={item.id} name={item.name} price={item.price} img={item.img} category={item.category}/>
                              <ItemCount stock={item.stock} initial= {1}/>
                         </div>) 
        } 
        
        </>
    )
} 

export default itemList;