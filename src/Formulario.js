import Form from 'react-bootstrap/Form';
import { useState } from 'react';

export default function Formulario(props) { 
  const [text, setText] = useState("");
  const [valor, setValor] = useState();

  function found(str) {
    setText(str);
  }

  function handleChange(event) {
    setValor(event.target.value);
    props.filterSelec(props.theproducts, event.target.value);
  }
  
    return <div id="formulario">
      <h2 id="“catálogo”"> Catálogo </h2>

      <div className='orden'>

        <div className='buscar'>
          <label htmlFor="filtro"> Buscar </label>
          <input id="filtro" type="text" placeholder="Esciba lo que quiera buscar" value={text} onChange={e=>found(e.target.value)}></input>
          <button id="buscador" onClick={() => props.filterBuscar(props.theproducts, text)}> Buscar </button>
          <br/>      
        </div>
        
        <div className='filtro_selec'>
          <label htmlFor="selector"> Filtrar </label>
          <Form.Select id="selector" aria-label="Default select example" size="sm" value={valor} onChange={handleChange}>
            <option value={"All"}> All </option>
            {props.theproducts
              .reduce( (previousValue, currentValue) => {
                if (!previousValue.includes(currentValue.category)) {
                  return [...previousValue, currentValue.category];
                }
                return previousValue;
              }, [])
              .map( (categoria, index) => <option key= {index} value={categoria}> {categoria} </option>)        
            }
          </Form.Select>
        </div>

      </div>

    </div>
}