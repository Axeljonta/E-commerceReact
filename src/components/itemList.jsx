import Item from './item'; 
import ItemCount from './ItemCount';

const itemList = ({inf}) => { 
    return(
        <> 
        {
        inf.map(item => <div className='itemL'>
                              <Item id={item.id} name={item.name} price={item.price} img={item.img} category={item.category.name}/>
                              <ItemCount stock={item.stock} initial= {1}/>
                         </div>) 
        } 
        
        </>
    )
} 

export default itemList;