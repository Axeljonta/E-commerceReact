import Item from './item'; 
import ItemCount from './ItemCount';

const itemList = ({inf}) => { 
    return(
        <> 
        {
        inf.map(item => <div className='itemL'>
                              <Item key={item.id} id={item.id} name={item.name} price={item.price} img={item.img} category={item.category.name}/>
                              
                         </div>) 
        } 
        </>
    )
} 

export default itemList;