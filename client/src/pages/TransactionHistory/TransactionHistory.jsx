import "./TransactionHistory.css";
import { useEffect, useState } from "react";
import API from "../../services/api";

function TransactionHistory() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await API.get("/api/transactions");
        console.log(response.data);  
        
        setTransactions(response.data.transactions);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div className="transaction-page">
      <h1>Transaction History</h1>

       <div className="table-container">
      <table className="transaction-table">
        <thead>
          <tr>
  <th>Date</th>
  <th>Receiver</th>
  <th>Account Number</th>
  <th>Amount</th>
  <th>Status</th>
</tr>
        </thead>

        <tbody>
          {transactions.map((item) => (
  <tr key={item._id}>
    <td>{new Date(item.createdAt).toLocaleDateString()}</td>
    <td>{item.receiver}</td>
    <td>{item.accountNumber}</td>
    <td>₹{item.amount}</td>
    <td>{item.status}</td>
  </tr>
))}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default TransactionHistory;