import { useParams, Link } from 'react-router-dom';
import { products } from '../data';
import { useStore } from '../context/StoreContext';
import { Heart, Truck, ShieldCheck } from 'lucide-react';
import './ProductDetail.css';

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useStore();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <div className="container" style={{ padding: '10rem 0', textAlign: 'center' }}>Product not found</div>;

  return (
    <div className="product-detail-page">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Home</Link> / <Link to="/shop">Shop</Link> / <span>{product.name}</span>
        </div>

        <div className="product-layout">
          {/* Left: Image Gallery */}
          <div className="product-gallery">
            <div className="main-image">
              <img src={product.image} alt={product.name} />
            </div>
            {/* Mock thumbnails */}
            <div className="thumbnail-row">
               <img src={product.image} alt="thumb 1" className="active" />
               <img src="https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&q=80&w=200" alt="thumb 2" />
            </div>
          </div>

          {/* Right: Sticky Info */}
          <div className="product-info-panel">
            <h1>{product.name}</h1>
            <p className="price">₹{product.price.toLocaleString('en-IN')}</p>
            
            <div className="rating">
              <span>★★★★★</span> <span className="muted">(12 Reviews)</span>
            </div>

            <p className="description">{product.description}</p>

            <div className="variant-selector">
              <h4>Color</h4>
              <div className="colors">
                <span className="color-swatch active" style={{ backgroundColor: '#1A365D' }}></span>
                <span className="color-swatch" style={{ backgroundColor: '#C15B3D' }}></span>
                <span className="color-swatch" style={{ backgroundColor: '#D4AF37' }}></span>
              </div>
            </div>

            <div className="actions">
              <button className="btn add-to-cart" onClick={() => addToCart(product)}>Add to Bag</button>
              <button className="wishlist-btn"><Heart size={20} /></button>
            </div>

            <div className="trust-badges">
              <div className="badge"><Truck size={20}/> Free shipping over ₹2000</div>
              <div className="badge"><ShieldCheck size={20}/> Secure checkout</div>
            </div>
          </div>
        </div>

        {/* Complete the Look */}
        <div className="complete-look">
          <h2 className="text-center">Complete the Look</h2>
          <div className="look-grid">
            {products.filter(p => p.id !== product.id).slice(0, 3).map(p => (
              <div key={p.id} className="look-item">
                <img src={p.image} alt={p.name} />
                <h4>{p.name}</h4>
                <p>₹{p.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}