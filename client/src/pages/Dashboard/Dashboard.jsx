import "./Dashboard.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import API from "../../services/api";

function Dashboard() {
  const [account, setAccount] = useState(null);
  useEffect(() => {
  const fetchAccount = async () => {
    try {
      const response = await API.get("/accounts");
      setAccount(response.data.account);
    } catch (error) {
      console.log(error);
    }
  };

  fetchAccount();
}, []);
  return (
    <>
  <Sidebar />

  <div className="dashboard-content">
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="account-info">
  <h2>Welcome</h2>

  <p>
    <strong>Account Number:</strong>{" "}
    {account?.accountNumber || "Loading..."}
  </p>

  <p>
    <strong>Balance:</strong>{" "}
    ₹{account?.balance || 0}
  </p>
</div>

      <div className="dashboard-cards">
        <Link to="/account" className="card">
          <h3>👤 My Account</h3>
          <p>View and manage your account.</p>
        </Link>

        <Link to="/transfer" className="card">
          <h3>💸 Transfer Money</h3>
          <p>Transfer funds securely.</p>
        </Link>

        <Link to="/transactions" className="card">
          <h3>📜 Transaction History</h3>
          <p>View all transactions.</p>
        </Link>

        <Link to="/loan" className="card">
          <h3>🏦 Loan Application</h3>
          <p>Apply for a loan online.</p>
        </Link>
      </div>
    </div>
    </div>
    </>
  );
}

export default Dashboard;