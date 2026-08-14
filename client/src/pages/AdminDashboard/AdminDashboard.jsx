import "./AdminDashboard.css";
import { useEffect, useState } from "react";
import API from "../../services/api";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

function AdminDashboard() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalAccounts: 0,
    totalTransactions: 0,
    totalLoans: 0,
    pendingLoans: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await API.get("/api/admin/dashboard");
        setStats(response.data.stats);
      } catch (error) {
        console.log(error);
      }
    };

    fetchStats();
  }, []);
  const chartData = {
  labels: [
    "Users",
    "Accounts",
    "Transactions",
    "Loans",
    "Pending Loans",
  ],
  datasets: [
    {
      label: "Admin Statistics",
      data: [
        stats.totalUsers,
        stats.totalAccounts,
        stats.totalTransactions,
        stats.totalLoans,
        stats.pendingLoans,
      ],
      backgroundColor: [
        "#3498db",
        "#2ecc71",
        "#f39c12",
        "#9b59b6",
        "#e74c3c",
      ],
    },
  ],
};
  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>

      <div className="cards">
        <div className="card">
          <h2>Total Users</h2>
          <p>{stats.totalUsers}</p>
        </div>

        <div className="card">
          <h2>Total Accounts</h2>
          <p>{stats.totalAccounts}</p>
        </div>

        <div className="card">
          <h2>Total Transactions</h2>
          <p>{stats.totalTransactions}</p>
        </div>

        <div className="card">
          <h2>Total Loans</h2>
          <p>{stats.totalLoans}</p>
        </div>

        <div className="card">
          <h2>Pending Loans</h2>
          <p>{stats.pendingLoans}</p>
        </div>
      </div>
      
  <div className="chart-container">
  <Bar
    data={chartData}
    options={{
      responsive: true,
      maintainAspectRatio: false,
    }}
  />
  </div>
</div>

    
  );
}

export default AdminDashboard;