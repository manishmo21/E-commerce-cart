import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/actions";

const HomePage = () => {
  const dispatch = useDispatch();

  const products = [
    { id: 1, name: "Product 1", price: 10, image: "product1.jpg" },
    { id: 2, name: "Product 2", price: 20, image: "product2.jpg" },
    { id: 3, name: "Product 3", price: 10, image: "product1.jpg" },
    { id: 4, name: "Product 4", price: 20, image: "product2.jpg" },
    { id: 5, name: "Product 5", price: 10, image: "product1.jpg" },
    { id: 6, name: "Product 6", price: 20, image: "product2.jpg" },
    { id: 7, name: "Product 7", price: 10, image: "product1.jpg" },
    { id: 8, name: "Product 8", price: 20, image: "product2.jpg" },
    { id: 9, name: "Product 9", price: 10, image: "product1.jpg" },
    { id: 10, name: "Product 10", price: 20, image: "product2.jpg" },
  ];

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="home-page">
      <h2>Home Page</h2>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <p>Price: ${product.price}</p>
            <button onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
