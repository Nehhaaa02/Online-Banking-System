import "./AdminLoans.css";
import { useEffect, useState } from "react";
import API from "../../services/api";

function AdminLoans() {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    fetchLoans();
        
  }, []);

  const fetchLoans = async () => {
  try {
    const response = await API.get("/admin/loans");

    console.log("Loans Response:", response.data);

    setLoans(response.data.loans);
  } catch (error) {
    console.log("Error:", error.response?.data || error.message);
  }
};

  const updateStatus = async (id, status) => {
    try {
      const response = await API.put(`/admin/loans/${id}`, {
        status,
      });

      alert(response.data.message);

      fetchLoans();
    } catch (error) {
      alert(error.response?.data?.message || "Update Failed");
    }
  };

  return (
    <div className="admin-loans">
      <h1>Loan Management</h1>

      <div className="table-container">
  <table className="loan-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Loan Type</th>
            <th>Amount</th>
            <th>Duration</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {loans.map((loan) => (
            <tr key={loan._id}>
              <td>{loan.user.fullName}</td>
              <td>{loan.user.email}</td>
              <td>{loan.loanType}</td>
              <td>₹{loan.amount}</td>
              <td>{loan.duration} Years</td>
              <td>{loan.status}</td>
              <td>
                <button
                    className="approve-btn"
                  onClick={() => updateStatus(loan._id, "Approved")}
                >
                  Approve
                </button>

                <button
                    className="reject-btn"
                  onClick={() => updateStatus(loan._id, "Rejected")}
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default AdminLoans;