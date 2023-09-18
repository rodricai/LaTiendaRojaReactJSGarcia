import { useContext, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import { CartContext } from "../contexts/CartContext";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import Table from 'react-bootstrap/Table';

function Cart() {
    const { clear, items, removeItem } = useContext(CartContext);
    const [formValues, setFormValues] = useState({
        name: "",
        phone: "",
        email: "",
    });

    // Función para calcular el total
    const total = () => {
        return items.reduce(
            (acumulador, valorActual) =>
                acumulador + valorActual.quantity * valorActual.price,
            0
        );
    };

    const handleChange = (ev) => {
        setFormValues((prev) => ({
            ...prev,
            [ev.target.name]: ev.target.value,
        }));
    };

    const sendOrdenes = () => {
        const ordenes = {
            buyer: formValues,
            items,
            total: total(),
        };

        const db = getFirestore();
        const ordenesCollection = collection(db, "ordenescompra");

        addDoc(ordenesCollection, ordenes)
            .then(({ id }) => {
                if (id) {
                    setFormValues({
                        name: "",
                        phone: "",
                        email: "",
                    });
                    clear();
                    alert("Su orden: " + id + " ha sido completada!");
                }
            })
            .catch((error) => {
                console.error("Error al guardar la orden:", error);
            });
    };

    return (
        <Container>
            <h1 style={{textAlign: "center", margin:"15px", color:"red"}}>TU CARRITO</h1>
            {items.length === 0 ? (
                <h2>No añadiste nada al carrito, no te pierdas nuestros productos, sigue navegando...</h2>
            ) : (
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th style={{textAlign:"center"}}>Precio</th>
                            <th style={{textAlign:"center"}}>Cantidad</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item) => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td style={{textAlign:"center"}}>{item.price} $</td>
                                <td style={{textAlign:"center"}}>{item.quantity}</td>
                                <td style={{verticalAlign:"middle", textAlign:"center"}}>
                                    <button  onClick={() => removeItem(item.id)}>
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>Total</td>
                            <td style={{textAlign:"center"}} colSpan={3}>{total()} $</td>
                        </tr>
                    </tfoot>
                </Table>
            )}
            <h2>Ingresar datos de usuario</h2>
            <div>
                <input
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    value={formValues.name}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="phone"
                    placeholder="Teléfono"
                    value={formValues.phone}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formValues.email}
                    onChange={handleChange}
                />
                <button  onClick={sendOrdenes}>Realizar el Pedido</button>
            </div>
        </Container>
    );
}

export default Cart;
