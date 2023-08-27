export const ItemDetail = ({product}) =>
    <div className="conteinerImg">
        <h1>{product.name}</h1>
        <img src={product.avatar} />
        <div>{product.stock}</div>
    </div>;