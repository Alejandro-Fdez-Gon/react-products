import './Producto.css';
import Location from "./Location"
import { useParams, useNavigate } from "react-router-dom"

export default function Producto(props) {
  let navigate = useNavigate();

  let { productId } = useParams();
  let producto = props.theproducts[productId];

  return <div id="producto">
    < Location />
    <h1 id="titulo"> {producto.title} </h1>

    <div id="maqueta">
      <div>
        <img className="imagen" src={producto.images[0]} alt="Foto"></img>
      </div>

      <div className="atributos">
        <h3>Price: {producto.price}€ </h3>
        <h3>Rating: {producto.rating} </h3>
        <h3>Stock: {producto.stock} </h3>
        <button id="volver" onClick={ () => navigate("/") }> Volver: </button>
      </div>    
    </div>
    
  </div>
    
}