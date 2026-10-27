// src/pages/AdminDashboard.jsx
import { LayoutDashboard, Package, Users, ShoppingCart, Settings, TrendingUp, MoreVertical } from 'lucide-react';
import './AdminDashboard.css';

export default function AdminDashboard() {
  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="admin-brand">Sangam Admin</div>
        <nav className="admin-nav">
          <a href="#" className="active"><LayoutDashboard size={20} /> Dashboard</a>
          <a href="#"><Package size={20} /> Products</a>
          <a href="#"><ShoppingCart size={20} /> Orders</a>
          <a href="#"><Users size={20} /> Customers</a>
          <a href="#"><Settings size={20} /> Settings</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="admin-main">
        <header className="admin-header">
          <h1>Overview</h1>
          <div className="admin-profile">
            <div className="avatar">SD</div>
            <span>Sangam Admin</span>
          </div>
        </header>

        <div className="admin-content">
          {/* Stat Cards */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon bg-blue"><TrendingUp size={24} /></div>
              <div>
                <p className="stat-label">Total Sales</p>
                <h3>₹1,24,500</h3>
                <span className="trend positive">+12.5%</span>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon bg-orange"><ShoppingCart size={24} /></div>
              <div>
                <p className="stat-label">Active Orders</p>
                <h3>342</h3>
                <span className="trend positive">+5.2%</span>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon bg-green"><Package size={24} /></div>
              <div>
                <p className="stat-label">Products</p>
                <h3>48</h3>
                <span className="trend negative">-2%</span>
              </div>
            </div>
          </div>

          {/* Data Tables & Charts */}
          <div className="dashboard-grid">
            <div className="admin-panel recent-orders">
              <div className="panel-header">
                <h2>Recent Orders</h2>
                <button className="btn-text">View All</button>
              </div>
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Product</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>#ORD-001</td>
                    <td>Aarav Sharma</td>
                    <td>Blue House Bedcover</td>
                    <td>₹2,999</td>
                    <td><span className="status completed">Completed</span></td>
                    <td><MoreVertical size={16} /></td>
                  </tr>
                  <tr>
                    <td>#ORD-002</td>
                    <td>Priya Patel</td>
                    <td>Raksha Bandhan Set</td>
                    <td>₹1,499</td>
                    <td><span className="status processing">Processing</span></td>
                    <td><MoreVertical size={16} /></td>
                  </tr>
                  <tr>
                    <td>#ORD-003</td>
                    <td>Rohan Gupta</td>
                    <td>Handloom Tote Bag</td>
                    <td>₹899</td>
                    <td><span className="status pending">Pending</span></td>
                    <td><MoreVertical size={16} /></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="admin-panel traffic-panel">
              <div className="panel-header">
                <h2>Top Products</h2>
              </div>
              <div className="traffic-list">
                 <div className="traffic-item">
                    <div className="traffic-info"><span>Blue House Bedcover</span><span>₹14,500</span></div>
                    <div className="progress-bar"><div className="fill" style={{ width: '75%' }}></div></div>
                 </div>
                 <div className="traffic-item">
                    <div className="traffic-info"><span>Heritage Tote Bag</span><span>₹8,900</span></div>
                    <div className="progress-bar"><div className="fill" style={{ width: '50%' }}></div></div>
                 </div>
                 <div className="traffic-item">
                    <div className="traffic-info"><span>Rakhi Gift Set</span><span>₹6,400</span></div>
                    <div className="progress-bar"><div className="fill" style={{ width: '35%' }}></div></div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}