import {Link} from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export const Item = ({product}) => (
    <Card key={product.id} style={{ width: '18rem' }}>
        <Card.Img className="cardImg" variant="top" src={product.avatar} />
        <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.category}</Card.Text>
            <Link to={`/item/${product.id}`}>
                <Button variant="primary">Ver Descripcion</Button>
            </Link>
        </Card.Body>
    </Card>);