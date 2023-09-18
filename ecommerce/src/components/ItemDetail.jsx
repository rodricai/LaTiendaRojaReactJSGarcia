import { useContext } from "react";
import { ItemCount } from "./ItemCount";
import { CartContext } from "../contexts/CartContext";
import Card from "react-bootstrap/Card";

    export const ItemDetail = ({ product }) => {
    const { addItem } = useContext(CartContext);
    const onAdd = (count) => addItem(product, count);

    return (
        <Card key={product.id} style={{ width: '18rem' }}>
            <Card.Img className="cardImg" variant="top" src={product.avatar} />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>Stock: {product.stock}</Card.Text>
                <Card.Text>Precio: {product.price} $</Card.Text>
                <ItemCount stock={product.stock} onAdd={onAdd} />
            </Card.Body>
        </Card>
    );
};

