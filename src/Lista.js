import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

export default function Lista(props) {
    let navigate = useNavigate();

    return <div id="productosresultados">
        {props.theproducts.map((producto, index) => {
                return (
                    <Card key={index} className="unproducto" bg="dark" text="light" style={{ width: '22rem' }}>
                        <Card.Img variant="top" className='prod_img' src={producto.thumbnail} style={{ objectFit: "cover", height: "12rem" }}/>
                        <Card.Body>
                            <Card.Title> {producto.title} </Card.Title>
                            <Card.Text> {producto.description} </Card.Text>
                            <Button variant="primary" onClick={ () => navigate(`/products/${index}`) }> Ver </Button>
                        </Card.Body>
                    </Card>
                )       
        })}        
    </div>
}