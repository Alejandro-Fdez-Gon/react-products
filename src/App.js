import SearchPage from './SearchPage';
import Producto from './Producto';
import NoMatch from './NoMatch';
import Header from './Header';
import Spinner from 'react-bootstrap/Spinner';
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from 'react';
import CONFIG from "./config/config";
import { mockdata } from "./constants/products";

const USE_SERVER = CONFIG.use_server;
const SERVER_URL = CONFIG.server_url;
const time_out = CONFIG.loading_timeout_ms;

function App() {
  const [loading, setLoading] = useState(true);
  const [producto, setProducto] = useState();
  
  const buscar = (array)  => {
    setProducto(array);
  }

  const download = async () => {
    if (USE_SERVER){
      try {
        const res = await fetch(SERVER_URL);
        const data = await res.json();
        setProducto(data.products);
      } catch (e) {
        alert("No se ha podido recuperar.");
      }
    }else{
      setProducto(mockdata.products);
    }
	}

  useEffect ( () => {
    async function fetchData() {
      await download();
      setTimeout(()=>{
        setLoading(false);
      },time_out);	
      return clearInterval;	
    }

    fetchData();
    
  }, []);

  return <div className="App">
    {loading?<Spinner animation="border" id="loading"  className="spinner"/>:
      <div>
          < Header />
          < Routes >
            < Route path="/" element= { <SearchPage theproducts={producto} buscar={buscar}/> } />
            < Route path="/products/:productId" element= { <Producto theproducts={producto}/> } />
            < Route path="*" element= { <NoMatch/> } />
          </Routes >
      </div>
    }    
  </div>

}

export default App;


