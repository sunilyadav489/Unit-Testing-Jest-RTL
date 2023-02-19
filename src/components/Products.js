import React, { useState, useEffect } from "react";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const products = await axios.get(
        "https://dummyjson.com/products"
      );

      setProducts(products.data);
    }
    getProducts();
  }, []);

  return (
    <>
      <h4>Product Component (Testing Async request)</h4>
      <ul>
      {products.products?.map(item => (
        <li key={item.id} data-testid="product">
          {`Item: ${item.title} \u00A0\u00A0\u00A0\u00A0 Price: $${item.price}`}
        </li>
      ))}
    </ul>
    </>
    
  );
};

export default Products;