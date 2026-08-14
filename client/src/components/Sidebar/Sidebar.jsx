import "./Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  const user = JSON.parse(localStorage.getItem("user"));

  const isAdmin = user?.role === "admin";

  return (
    <div className="sidebar">
      <h2>🏦 Banking</h2>

      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/account">My Account</Link></li>
        <li><Link to="/transfer">Transfer Money</Link></li>
        <li><Link to="/transactions">Transactions</Link></li>
        <li><Link to="/loan">Loan</Link></li>

        {isAdmin && (
          <>
            <hr />
            <li><strong>👑 Admin Panel</strong></li>
            <li><Link to="/admin/dashboard">Admin Dashboard</Link></li>
            <li><Link to="/admin/users">Manage Users</Link></li>
            <li><Link to="/admin/loans">Manage Loans</Link></li>
            <li><Link to="/admin/transactions">Transactions</Link></li>
          </>
        )}

        <li><Link to="/">Logout</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;