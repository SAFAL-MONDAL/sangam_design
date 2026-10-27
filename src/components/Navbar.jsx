import { Link } from 'react-router-dom';
import { ShoppingBag, Search, User, Menu } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import './Navbar.css';

export default function Navbar() {
  const { cart } = useStore();
  
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/" className="brand-logo">SANGAM DESIGNS</Link>
        </div>
        
        <div className="navbar-center">
          <Link to="/shop" className="nav-link">Shop All</Link>
          <Link to="/about" className="nav-link">Our Story</Link>
          <Link to="/admin" className="nav-link admin-link">Admin Panel</Link>
        </div>

        <div className="navbar-right">
          <Search className="nav-icon" size={20} strokeWidth={1.5} />
          <User className="nav-icon" size={20} strokeWidth={1.5} />
          <Link to="/cart" className="cart-icon-wrapper">
            <ShoppingBag className="nav-icon" size={20} strokeWidth={1.5} />
            {cart.length > 0 && <span className="cart-badge">{cart.length}</span>}
          </Link>
        </div>
      </div>
    </nav>
  );
}