import { useState, useEffect } from "react";
import ItemDetail from "./itemDetail";
import { useParams } from "react-router"; 
import style from './styles/ItemDetailStyles.module.css';
import { firestoreFetchOne } from "../utils/fireFech";

function ItemDetailContainer (){ 
    
    const [bebidas, setBebidas] = useState({}); 
    const { idItem } = useParams();

    useEffect(() => {
        firestoreFetchOne(idItem)
            .then(result => setBebidas(result))
            .catch(err => console.log(err))
    }, [idItem]);
    

    
    return( 
        <div className={style.detailItemCont}> 
          <ItemDetail data= {bebidas}/>
        </div>
    )
}

export default ItemDetailContainer