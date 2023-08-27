import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<ItemListContainer greeting="Hi!" />}
        />
        <Route
          path="/category/:id"
          element={<ItemListContainer greeting="Hi!" />}
        />
        <Route
          path="/item/:id"
          element={<ItemDetailContainer />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;





///// <Nav.Link as={Link} to="/myCategory">myCategory</Nav.Link>