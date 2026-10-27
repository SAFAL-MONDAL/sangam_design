import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { StoreProvider, useStore } from './context/StoreContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import AdminDashboard from './pages/AdminDashboard';
import { products } from './data';
import ProductCard from './components/ProductCard';
import './index.css';

// Simple Shop Page inline for brevity
const Shop = () => (
  <div className="container" style={{ padding: '6rem 2rem' }}>
    <div className="section-header text-center">
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>All Creations</h1>
      <p style={{ color: 'var(--color-text-muted)' }}>Explore our full collection of handcrafted goods.</p>
    </div>
    <div className="product-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', marginTop: '4rem' }}>
      {products.map(product => <ProductCard key={product.id} product={product} />)}
    </div>
  </div>
);

// Simple About Page inline
const About = () => (
  <div className="container" style={{ padding: '6rem 2rem', maxWidth: '800px', textAlign: 'center' }}>
    <h1 style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>From India's Looms to the World</h1>
    <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--color-text-muted)' }}>
      Sangam Designs was born from a deep love for India's handloom heritage and a belief that true craftsmanship deserves a place on the world stage. What began as a passion for preserving traditional weaves has evolved into a celebration of sustainable design, artisan skill, and timeless elegance.
    </p>
  </div>
);

// Cart Page inline
const Cart = () => {
  const { cart, removeFromCart, cartTotal } = useStore();
  return (
    <div className="container" style={{ padding: '6rem 2rem', minHeight: '60vh' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '3rem', borderBottom: '1px solid #ddd', paddingBottom: '1rem' }}>Shopping Bag</h1>
      {cart.length === 0 ? <p>Your bag is empty.</p> : (
        <div style={{ display: 'flex', gap: '4rem' }}>
          <div style={{ flex: 2 }}>
            {cart.map(item => (
              <div key={item.id} style={{ display: 'flex', gap: '2rem', borderBottom: '1px solid #eee', paddingBottom: '2rem', marginBottom: '2rem' }}>
                <img src={item.image} alt={item.name} style={{ width: '120px', height: '150px', objectFit: 'cover' }} />
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem' }}>{item.name}</h3>
                  <p style={{ color: 'var(--color-text-muted)', margin: '0.5rem 0' }}>Qty: {item.quantity}</p>
                  <p>₹{item.price}</p>
                </div>
                <button onClick={() => removeFromCart(item.id)} style={{ background: 'none', textDecoration: 'underline', color: 'red', height: 'fit-content' }}>Remove</button>
              </div>
            ))}
          </div>
          <div style={{ flex: 1, background: '#fff', padding: '2rem', borderRadius: '8px', height: 'fit-content' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Order Summary</h2>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <span>Subtotal</span>
              <span>₹{cartTotal.toLocaleString('en-IN')}</span>
            </div>
            <button className="btn" style={{ width: '100%', marginTop: '1rem' }}>Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

const ToastContainer = () => {
  const { toasts } = useStore();
  return (
    <div className="toast-container">
      {toasts.map(t => <div key={t.id} className="toast">{t.message}</div>)}
    </div>
  );
};

function App() {
  return (
    <StoreProvider>
      <Router>
        <Routes>
          {/* Admin Route */}
          <Route path="/admin" element={<AdminDashboard />} />
          
          {/* Customer Storefront Routes */}
          <Route path="*" element={
            <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
              <Navbar />
              <main style={{ flex: 1 }}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/shop" element={<Shop />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/product/:id" element={<ProductDetail />} />
                  <Route path="/cart" element={<Cart />} />
                </Routes>
              </main>
              <footer style={{ background: '#121212', color: '#fff', padding: '4rem 2rem', textAlign: 'center' }}>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: '1rem' }}>SANGAM DESIGNS</h2>
                <p style={{ color: '#888', fontSize: '0.9rem' }}>© 2024 Sangam Designs. Handlooms with Heart.</p>
              </footer>
            </div>
          } />
        </Routes>
        <ToastContainer />
      </Router>
    </StoreProvider>
  );
}

export default App;