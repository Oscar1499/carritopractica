import React, { useEffect, useState } from "react";
import { getProducts, getCategories } from "../api/wendysApi";
import { useCart } from "../context/CartContext";
import "../styles/wendys.css";


function ProductosWendys() {
  const { addItem } = useCart();
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCat, setSelectedCat] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const cats = await getCategories();
      const prods = await getProducts();
      setCategories(cats);
      setProducts(prods);
    };
    fetchData();
  }, []);

  const filteredProducts = selectedCat
    ? products.filter((p) => p.T === selectedCat)
    : products;

  return (
    <div className="container">
      <h2>Productos Wendy's</h2>

      {/* Categorías */}
      <div className="categories">
        <button onClick={() => setSelectedCat(null)}>Todas</button>
        {categories.map((cat) => (
          <button key={cat.cat} onClick={() => setSelectedCat(cat.cat)}>
            {cat.nombre}
          </button>
        ))}
      </div>

      {/* Productos */}
      <div className="products-container">
        {filteredProducts.length === 0 ? (
          <p>No hay productos disponibles</p>
        ) : (
          filteredProducts.map((item) => (
            <div key={item.I} className="product-card">
              <h3>{item.N}</h3>
              <p>${item.P ?? "0.00"}</p>
              <button onClick={() => addItem({ I: item.I, N: item.N, P: item.P ?? 0 })}>
                Agregar al carrito
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ProductosWendys;
