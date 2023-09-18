import { useState } from "react"


export const ItemCount = ({ onAdd, stock }) => {
    const [count, setCount] = useState(1);

    const handleDecreaseCount = () => {
        if (count > 1) {
            setCount((prev) => prev - 1);
        }
    };

    const handleIncreaseCount = () => {
        if (stock > count) {
            setCount((prev) => prev + 1);
        }
    };


    return (
        <div className="itemCount" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div className="countButtons" style={{ display: 'flex', alignItems: 'center' }}>
                <span onClick={handleDecreaseCount}>-</span>
                <span>{count}</span>
                <span onClick={handleIncreaseCount}>+</span>
            </div>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>

    )
}