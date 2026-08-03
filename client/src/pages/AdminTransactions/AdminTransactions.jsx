import "./AdminTransactions.css";
import { useEffect, useState } from "react";
import API from "../../services/api";

function AdminTransactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const response = await API.get("/admin/transactions");
      setTransactions(response.data.transactions);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="admin-transactions">
      <h1>Transaction Management</h1>

      <div className="table-container">
  <table className="transaction-table">
        <thead>
          <tr>
            <th>Sender</th>
            <th>Receiver</th>
            <th>Account Number</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction._id}>
              <td>{transaction.sender?.fullName}</td>
              <td>{transaction.receiver?.fullName || "N/A"}</td>
              <td>{transaction.accountNumber}</td>
              <td>₹{transaction.amount}</td>
              <td>
                {new Date(transaction.createdAt).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default AdminTransactions;