// src/App.jsx
import { CartProvider } from "./context/CartContext";
import Productos from "./components/Productos";
import Carrito from "./components/Carrito";
import "./styles/wendys.css";

function App() {
  return (
    <CartProvider>
      <div className="app-container">
        <h1 className="app-title">Carrito Wendy’s</h1>
        <div className="main-content">
          <Productos />
          <Carrito />
        </div>
      </div>

    </CartProvider>
  );
}

export default App;
