import Location from "./Location";
import { useNavigate } from "react-router-dom"

export default function Header(props) {
    let navigate = useNavigate();

    return <div id="ruta_err">
      < Location />
      <h2 id="info"> Ruta no encontrada </h2>  
      <button id="volver" onClick={ () => navigate("/") }> Volver </button>
    </div>
    
}