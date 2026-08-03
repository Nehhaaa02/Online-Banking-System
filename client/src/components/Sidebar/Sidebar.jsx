import "./Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
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
        <li><Link to="/">Logout</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;