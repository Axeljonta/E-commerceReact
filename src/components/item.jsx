import { Link } from "react-router-dom";
const Item = ({id,name,stock,price,category,img,}) => {
    console.log(id);
  return(
    <div className="item-div">
      <img className="item-img" src={img} alt="producto"/>
      <div className="item-category">
        <h4 className="item-category-1">{category}</h4>
        <h4 className="item-category-2">{name}</h4>
        <h4 className="item-category-3">${price}</h4> 
      </div>  
      <Link to={'/item/'+id} className=' item-info'>Comprar</Link>
    </div>)
}

export default Item;