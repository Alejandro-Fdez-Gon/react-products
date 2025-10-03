import Formulario from './Formulario';
import Lista from './Lista';
import Location from './Location';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

export default function SearchPage(props) {
  const [copia, setCopia] = useState(props.theproducts)

  const filterBuscar = (array, param) => {
    setCopia( array.filter( (el) => el.title.toLowerCase().includes(param.toLowerCase()) ) );
  }

  const filterSelec = (array, valor) => {
    setCopia( array.filter( (el) => el.category === valor ) );
  }

  return (
  <div className="search">
    < Location />
    < Formulario theproducts={copia} filterBuscar={filterBuscar} filterSelec={filterSelec} text={props.text} found={props.found} />
    { copia && < Lista theproducts={copia}/>}
  </div>)
  
}
