import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Item = ({ product }) => (
    <Card key={product.id} style={{
        width: '18rem',
        border: '2px solid red',
        borderRadius: '5px',
        margin: '10px',
    }} className="m-3"  >
        <Card.Img className="cardImg" variant="top" src={product.avatar} />
        <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>Categoria : {product.category}</Card.Text>
            <Card.Text>Stock : {product.stock}</Card.Text>
            <Card.Text>Precio : {product.price} $</Card.Text>
            <Link to={`/item/${product.id}`}>
                <Button style={{borderColor: "white", backgroundColor: "red" }} variant="primary">Ver Descripcion</Button>
            </Link>
        </Card.Body>
    </Card>);