import ItemCount from "./ItemCount" 



function ItemDetail ({data}){
    return(<>{  
            data.img 
            ?
            <div className="detailItem">
                <img src={data.img} alt="producto" className="detailImg" /> 
                <div className="detailText">
                  <h2>{data.name}</h2>
                  <h4>{data.description}</h4>
                  <h6>Existencias: {data.stock} unidades</h6> 
                  <h4>A solo: ${data.price}</h4>
                  <ItemCount stock={data.stock} initial= {1}/> 
                </div>
            </div>: <p>Cargando...</p>}
          </>
          )
} 
export default ItemDetail