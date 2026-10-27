// src/components/ProductCard.jsx
import { Link } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import './ProductCard.css';

export default function ProductCard({ product }) {
  const { addToCart } = useStore();

  return (
    <div className="product-card">
      <div className="product-image-container">
        <Link to={`/product/${product.id}`}>
          {/* CHANGED: product.image to product.images[0] */}
          <img src={product.images[0]} alt={product.name} className="product-image" />
        </Link>
        {product.tag && <span className="product-tag">{product.tag}</span>}
        <button 
          onClick={() => addToCart(product)}
          className="quick-add-btn"
        >
          Quick Add
        </button>
      </div>
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <Link to={`/product/${product.id}`}>
          <h3 className="product-name">{product.name}</h3>
        </Link>
        <p className="product-price">₹{product.price.toLocaleString('en-IN')}</p>
      </div>
    </div>
  );
}