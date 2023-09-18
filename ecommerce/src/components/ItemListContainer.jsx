import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { getFirestore,getDocs,collection } from "firebase/firestore";
import { ItemList } from "./ItemList";


export const ItemListContainer = (props) => {
    const [products, setProducts] = useState([]);

    const { id } = useParams();


    useEffect(() => {
        const db = getFirestore();
    
        const refCollection = collection(db, "productos");
    
        getDocs(refCollection).then((snapshot) => {
          if (snapshot.size === 0) console.log("no results");
          else
            setProducts(
              snapshot.docs.map((doc) => {
                return { id: doc.id, ...doc.data() };
              })
            );
        });
      }, []);

    return (
        <Container>
            <h1 style={{textAlign: "center", margin:"15px"}}>{props.greeting}</h1>
            <div className="conteinerImg">
                <ItemList products={products} />
            </div>
        </Container>
    );
}